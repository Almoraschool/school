type TopperImageType = {
  url: string;
};

type TopperDetailsType = {
  id: string;
  name: string;
  percentage: number;
  subject: string;
  topperImage: TopperImageType;
};

type TopperType = {
  class: string;
  id: string;
  topperDetails: TopperDetailsType[];
};

type homeGallery = {
  homeGalleryImage: {
    url: string;
  }[];
}[];

type HomeType = {
  almoraHomes: {
    toppers: TopperType[];
    homeGallery: homeGalleryType;
  }[];
};

type homeBannerType = {
  homes: {
    homeVideoBanner: {
      url: string;
    }[];
  }[];
};


type Blog = {
  id: string;
  mainImage: {
    url: string;
  };
  title: string;
  slug: string;
  shortDesc: string;
};

type SchoolEvent = {
  id: string;
  day: string;
  eventName: string;
};

type BlogType = {
  haldwaniBlogs: Blog[];
  haldwaniHomes: {
    event: SchoolEvent[];
  }[];
};

type SingleBlogType = {
  almoraBlogs: {
    id: string;
    mainImage: {
      url: string;
    };
    title: string;
    shortDesc: string;
    slug: string;
    content: htm;
  }[];
};

type galleryType = {
  almoraImageGalleries: {
    imageGallery: {
      imageCategoryName: string;
      image: {
        url: string;
      }[];
    }[];
  }[];
};

type DisclosureType = {
  id: string;
  title: string;
  url: string;
}[];
