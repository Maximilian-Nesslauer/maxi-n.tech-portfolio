interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache: Record<string, CacheEntry> = {};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const repo = url.searchParams.get("repo");

  if (!repo) {
    return new Response('Repository name is required.', { status: 400 });
  }

  const branch = 'main';
  const cacheKey = `last-commit-${repo}-${branch}`;
  const currentTime = Date.now();
  const cacheExpiration = 15 * 60 * 1000; // 15 minutes

  // Check cache first
  if (cache[cacheKey] && (currentTime - cache[cacheKey].timestamp < cacheExpiration)) {
    return new Response(JSON.stringify(cache[cacheKey].data), { status: 200 });
  }

  // Fetch from GitHub API
  const apiUrl = `https://api.github.com/repos/${repo}/commits?sha=${branch}&per_page=1`;
  try {
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();
    if (data.length > 0) {
      const lastCommit = {
        date: data[0].commit.author.date,
        message: data[0].commit.message
      };
      // Update cache
      cache[cacheKey] = {
        data: lastCommit,
        timestamp: currentTime
      };
      return new Response(JSON.stringify(lastCommit), { status: 200 });
    } else {
      return new Response('No commits found.', { status: 404 });
    }
  } catch (error) {
    return new Response('Error fetching data from GitHub.', { status: 500 });
  }
}
