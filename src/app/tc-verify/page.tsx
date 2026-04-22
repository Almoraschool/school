"use client";

import React, { useState, useTransition } from "react";
import { verifyTransferCertificate } from "@/app/transfer-certificate/actions";
import {
  Search,
  Loader2,
  CheckCircle2,
  FileText,
  Calendar,
  Hash,
  GraduationCap,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  FileSearch,
  Lock,
} from "lucide-react";
import { poppins } from "@/utils/font";
import { cn } from "@/lib/utils";

const SEARCH_OPTIONS = [
  { value: "tcNumber", label: "TC Number" },
  { value: "studentNameDob", label: "Student Name & DOB" },
  { value: "admissionNumber", label: "Admission Number" },
];

const TCVerifyPage = () => {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [searchCriteria, setSearchCriteria] = useState("tcNumber");
    const [searchValue, setSearchValue] = useState("");
    const [dobValue, setDobValue] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleCriteriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchCriteria(e.target.value);
        setSearchValue("");
        setDobValue("");
        setResult(null);
        setError(null);
        setHasSearched(false);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setResult(null);
        setHasSearched(true);

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const response = await verifyTransferCertificate(formData);
            if (response.error) {
                setError(response.error);
            } else {
                setResult(response.data);
            }
        });
    };



    return (
        <div className={cn(poppins.className, "min-h-screen flex flex-col items-center bg-white")}>
            {/* Hero Section with Gradient and Pattern */}
            <section className="w-full relative overflow-hidden bg-[#3B2565] pt-16 pb-32 px-4 md:px-10 flex flex-col items-center justify-center text-center">
                {/* Accurate Background Pattern (small cross/square grid) */}
                <div className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h2v2H0V0zm4 4h2v2H4V4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                {/* Pill Badge */}
                <div className="z-10 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-white/80" />
                    <span className="text-white text-[10px] font-semibold tracking-[0.1em] uppercase">OFFICIAL VERIFICATION PORTAL</span>
                </div>

                {/* Hero Content */}
                <div className="z-10 max-w-4xl mx-auto mb-6">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        Transfer Certificate <br />
                        <span className="text-[#FBBF24]">Verification</span>
                    </h1>
                    <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                        Instantly verify the authenticity of Transfer Certificates issued by Beersheba Senior Secondary School, Almora.
                    </p>
                </div>

                {/* Action Badges */}
                <div className="z-10 flex flex-wrap justify-center gap-3 text-white/90">
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium">
                        <ShieldCheck className="w-3 h-3 text-[#4ADE80]" />
                        Secure & Authenticated
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium">
                        <FileSearch className="w-3 h-3 text-white/70" />
                        Officially Issued Records
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium">
                        <Lock className="w-3 h-3 text-white/70" />
                        Privacy Protected
                    </div>
                </div>
            </section>

            {/* Overlapping Content Wrapper */}
            <div className="w-full max-w-3xl px-4 -mt-20 z-20 pb-20">
                {/* Search Card */}
                <div className="bg-white rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-[#3B2565]/5 to-transparent border-b border-gray-100 px-5 py-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#3B2565]/10 flex items-center justify-center">
                            <Search size={18} className="text-[#3B2565]" />
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-[#3B2565]">Certificate Lookup</h2>
                            <p className="text-[11px] text-gray-500">Search using TC number, name or admission number</p>
                        </div>
                    </div>

                    {/* Form Body */}
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                        {/* Search Type Dropdown */}
                        <div className="mb-6">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5 block ml-1">Search By</label>
                            <select
                                name="searchBy"
                                value={searchCriteria}
                                onChange={handleCriteriaChange}
                                className="w-full bg-[#FAFAFB] border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 text-[14px] appearance-none focus:outline-none focus:border-[#3B2565]/20 focus:bg-white font-medium cursor-pointer transition-all"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%233B2565' stroke-width='2.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1rem' }}
                            >
                                {SEARCH_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Hidden field for searchBy */}
                        <input type="hidden" name="searchBy" value={searchCriteria} />

                        {/* Input fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {searchCriteria === "studentNameDob" ? (
                                <>
                                    <div className="space-y-2.5">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block ml-1">Student Name</label>
                                        <input
                                            name="searchValue"
                                            value={searchValue}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            required
                                            placeholder="e.g. Rahul Sharma"
                                            className="w-full bg-[#FAFAFB] border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#3B2565]/20 focus:bg-white font-medium transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block ml-1">Date of Birth</label>
                                        <input
                                            name="dobValue"
                                            type="date"
                                            value={dobValue}
                                            onChange={(e) => setDobValue(e.target.value)}
                                            required
                                            className="w-full bg-[#FAFAFB] border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 text-[14px] focus:outline-none focus:border-[#3B2565]/20 focus:bg-white font-medium transition-all"
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="md:col-span-2 space-y-2.5">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block ml-1">
                                        {searchCriteria === "tcNumber" ? "TC Number" : "Admission Number"}
                                    </label>
                                    <input
                                        name="searchValue"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        required
                                        placeholder={searchCriteria === "tcNumber" ? "e.g. TC-2024-001" : "e.g. ADM-12345"}
                                        className="w-full bg-[#FAFAFB] border-2 border-gray-100 rounded-xl px-4 py-3 text-gray-800 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#3B2565]/20 focus:bg-white font-medium transition-all"
                                    />
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-[#512D8C] hover:bg-[#3B2565] text-white py-4 rounded-xl font-bold text-[14px] flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-70 uppercase tracking-wider"
                        >
                            {isPending ? (
                                <><Loader2 size={18} className="animate-spin" /> Verifying Certificate...</>
                            ) : (
                                <><Search size={18} className="stroke-[2.5px]" /> Verify Certificate</>
                            )}
                        </button>
                    </form>
                </div>

                {/* Error */}
                {error && (
                    <div className="mt-6 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-4 animate-in fade-in zoom-in duration-300">
                        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                            <AlertCircle size={20} className="text-red-500" />
                        </div>
                        <div>
                            <p className="font-bold text-red-700 text-sm">Not Found</p>
                            <p className="text-red-600 text-xs mt-0.5 leading-relaxed font-medium">{error}</p>
                        </div>
                    </div>
                )}

                {/* Result */}
                {result && (
                    <div className="mt-6 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-500">
                        {/* Result Header */}
                        <div className="px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b bg-green-50/50 border-green-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-100">
                                    <ShieldCheck size={24} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600">
                                        ✓ Certificate Found
                                    </p>
                                    <h3 className="text-lg font-black text-gray-800">{result.studentName}</h3>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold border bg-green-100 text-green-700 border-green-200">
                                <CheckCircle2 size={16} />
                                Authentic Record
                            </div>
                        </div>

                        {/* Result Details Grid */}
                        <div className="p-6 lg:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: FileText, label: "TC Number", value: result.tcNumber },
                                    { icon: Hash, label: "Admission No.", value: result.admissionNumber },
                                    { icon: GraduationCap, label: "Class", value: result.studentClass },
                                    { icon: Calendar, label: "Date of Birth", value: new Date(result.dob).toLocaleDateString("en-IN") },
                                ].map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon size={14} className="text-[#3B2565]/60" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
                                        </div>
                                        <p className="text-[#3B2565] font-extrabold text-base">{value || "N/A"}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Download TC Button */}
                            {result.driveLink && (
                                <div className="mt-8 flex justify-center">
                                    <a
                                        href={result.driveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E74040] to-[#c23535] hover:from-[#c23535] hover:to-[#a02a2a] text-white font-extrabold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-xs uppercase tracking-widest"
                                    >
                                        <ExternalLink size={16} />
                                        View / Download TC Certificate
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Info Note */}
                <div className="mt-8 flex items-start gap-3 bg-[#F1F3F9] rounded-2xl p-5 border border-gray-200/50">
                    <ShieldCheck size={18} className="text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-[12px] leading-relaxed font-semibold">
                        This verification system is provided by Beersheba Senior Secondary School for official use. For any discrepancies, please contact the school office directly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TCVerifyPage;
