export const BlogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        {
          id: action.blog.id,
          title: action.blog.title,
          category: action.blog.category,
          description: action.blog.description,
        },
      ];
    case "REMOVE_BLOG":
      return state.filter((blog) => blog.id !== action.id);

    default:
      return state;
  }
};
