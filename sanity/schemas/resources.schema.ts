const schema = {
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "catagory",
      title: "Catagory",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ["stb", "tg", "coding", "fictions", "other"],
      },
    },
  ],
};

export default schema;
