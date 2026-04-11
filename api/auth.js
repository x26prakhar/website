export default function handler(req, res) {
  const { host } = req.headers;
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  const redirectUri = `${protocol}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: 'repo,user',
  });

  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
