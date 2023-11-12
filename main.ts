Deno.serve((request: Request): Response => {
  const url = new URL(request.url);
  const [_, owner, repo] = url.pathname.split("/");
  if (!owner || !repo) {
    return new Response("Invalid URL", { status: 500 });
  }
  return Response.redirect(
    `https://api.github.com/repos${url.pathname}/tarball`,
    302,
  );
});
