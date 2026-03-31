import AdmissionEnquiry from "@/components/admission-enquiry";
import Branches from "@/components/branches";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
import HeroSection from "@/components/home/hero-section";
import MissionAndValues from "@/components/home/mission-values";
import ToppersResult from "@/components/home/toppers-result";
import Video from "@/components/home/video";
import Why from "@/components/home/why";
import { server_query_function } from "@/lib/graphql";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {
  const bannerVideoQuery = `
   query MyQuery {
  homes {
    homeVideoBanner {
      url
    }
  }
}
  `;

  const featuredNewsQuery = `
query MyQuery {
  newsEvents(where: {featured: true}) {
    id
    newsHeading
    newsImage {
      url
    }
  }
}
`;

  const blogsEventsQuery = `
  query MyQuery {
  almoraBlogs {
    id
    mainImage {
      url
    }
     title
    slug
    shortDesc
  }
   almoraHomes {
    event {
      id
      day
      eventName
    }
  }
}
`;

  const galleryQuery = `
  query MyQuery {
  almoraHomes {
    homeGallery {
      homeGalleryImage {
        url
      }
    }
  }
}
  `;

  type NewsEventType = {
    newsEvents: Array<{
      id: string;
      newsHeading: string;
      newsImage: {
        url: string;
      };
    }>;
  };

  type BlogType = {
    almoraBlogs: Array<{
      id: string;
      mainImage: {
        url: string;
      };
      title: string;
      slug: string;
      shortDesc: string;
    }>;
    almoraHomes: Array<{
      event: Array<{
        id: string;
        day: string;
        eventName: string;
      }>;
    }>;
  };

  type HomeType = {
    almoraHomes: Array<{
      homeGallery: {
        homeGalleryImage: Array<{
          url: string;
        }>;
      };
    }>;
  };

  type homeBannerType = {
    homes: Array<{
      homeVideoBanner: Array<{
        url: string;
      }>;
    }>;
  };

  // Fetch all data in parallel using Promise.all
  const [videoBanner, featuredResponse, res, response] = await Promise.all([
    server_query_function(bannerVideoQuery) as Promise<homeBannerType>,
    server_query_function(featuredNewsQuery) as Promise<NewsEventType>,
    server_query_function(blogsEventsQuery) as Promise<BlogType>,
    server_query_function(galleryQuery) as Promise<HomeType>,
  ]);

  return (
    <>
      <HeroSection video={videoBanner?.homes} />
      <Video featured={featuredResponse?.newsEvents} />
      <About />
      <MissionAndValues />
      <Academics />
      <Why />
      <ToppersResult />
      <Branches />
      <Gallery
        image={response?.almoraHomes[0]?.homeGallery?.homeGalleryImage}
      />
      <Events blogs={res?.almoraBlogs} events={res?.almoraHomes[0]?.event} />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
