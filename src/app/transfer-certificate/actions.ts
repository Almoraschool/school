"use server";

import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";

export async function verifyTransferCertificate(formData: FormData) {
    const searchBy = formData.get("searchBy");
    const searchValue = formData.get("searchValue");
    const dobValue = formData.get("dobValue");

    try {
        let query;
        if (searchBy === "tcNumber") {
            query = gql`
                query MyQuery {
                    transferCertificates2(where: { tcNumber: "${searchValue}" }, first: 1) {
                        studentName
                        tcNumber
                        admissionNumber
                        studentClass
                        dob
                        driveLink
                    }
                }
            `;
        } else if (searchBy === "studentNameDob") {
            query = gql`
                query MyQuery {
                    transferCertificates2(where: { 
                        studentName: "${searchValue}",
                        dob: "${dobValue}"
                    }, first: 1) {
                        studentName
                        tcNumber
                        admissionNumber
                        studentClass
                        dob
                        driveLink
                    }
                }
            `;
        } else if (searchBy === "admissionNumber") {
            query = gql`
                query MyQuery {
                    transferCertificates2(where: { admissionNumber: "${searchValue}" }, first: 1) {
                        studentName
                        tcNumber
                        admissionNumber
                        studentClass
                        dob
                        driveLink
                    }
                }
            `;
        } else {
            throw new Error("Invalid search criteria");
        }

        const response = (await server_query_function(query)) as { transferCertificates2: any[] };
        
        if (response.transferCertificates2 && response.transferCertificates2.length > 0) {
            return {
                data: response.transferCertificates2[0],
                error: null
            };
        } else {
            return {
                data: null,
                error: "No certificate found matching these details. Please verify the information and try again or contact the school office."
            };
        }

    } catch (error) {
        console.error("Hygraph Error:", error);
        return {
            data: null,
            error: "We encountered an issue while verifying the certificate. Please try again later."
        };
    }
}
