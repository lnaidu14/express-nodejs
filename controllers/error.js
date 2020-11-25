exports.get404 = (req, res, next) => {
  res.status(404).render("notFound", { docTitle: "Not Found", path: "/404" });
};
