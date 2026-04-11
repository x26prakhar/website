export const prerender = false;

export function GET({ request }) {
  const url = new URL(request.url);
  const redirectUri = `${url.protocol}//${url.host}/api/callback`;

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: 'repo,user',
  });

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params}`,
    302
  );
}
