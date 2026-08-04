import React, { useState } from 'react';
import BlogHero from '../components/blog/BlogHero';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import TrendingArticles from '../components/blog/TrendingArticles';
import LatestArticles from '../components/blog/LatestArticles';
import NewsletterSubscribe from '../components/blog/NewsletterSubscribe';
import { useGetBlogsQuery } from '../store/apiSlice';
import { Loader2 } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  // 1. Check if we are in the default layout view
  const isDefaultView = activeCategory === 'All Articles' && !searchQuery;
  
  // 2. Fetch Featured Article
  const { data: featuredResponse } = useGetBlogsQuery(
    { isFeatured: true, limit: 1, status: 'Published' },
    { skip: !isDefaultView }
  );
  const featuredArticle = featuredResponse?.data?.[0];

  // 3. Fetch Trending Articles
  const { data: trendingResponse } = useGetBlogsQuery(
    { isTrending: true, limit: 3, status: 'Published', excludeId: featuredArticle?._id },
    { skip: !isDefaultView || (isDefaultView && !featuredResponse) } // wait for featured article to get excludeId
  );
  const trendingArticles = trendingResponse?.data || [];

  // 4. Fetch Latest Articles (Paginated)
  const latestParams = {
    page,
    limit: 9,
    status: 'Published'
  };
  
  if (!isDefaultView) {
    if (activeCategory !== 'All Articles') latestParams.category = activeCategory;
    if (searchQuery) latestParams.search = searchQuery;
  } else if (featuredArticle?._id) {
    latestParams.excludeId = featuredArticle._id;
  }

  const { data: latestResponse, isLoading, error } = useGetBlogsQuery(latestParams);
  const latestArticles = latestResponse?.data || [];
  const totalPages = latestResponse?.pages || 1;

  // Handle category/search changes (reset page to 1)
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <div className="bg-transparent min-h-screen relative pt-15">
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12 pb-20">
        <BlogHero 
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />

        <div className="max-w-7xl mx-auto px-4 w-full">
          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-12 h-12 animate-spin text-brand-yellow" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-32">
              Failed to load articles. Please try again later.
            </div>
          ) : latestArticles.length === 0 && !featuredArticle ? (
            <div className="text-center text-gray-400 py-32">
              No articles found matching your criteria.
            </div>
          ) : (
            <>
              {/* Top Section: Featured & Trending */}
              {isDefaultView ? (
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                  {/* Featured Article (Left, takes ~65%) */}
                  <div className="lg:w-[65%]">
                    {featuredArticle && <FeaturedArticle article={featuredArticle} />}
                  </div>
                  
                  {/* Trending Articles (Right, takes ~35%) */}
                  <div className="lg:w-[35%]">
                    {trendingArticles.length > 0 && <TrendingArticles articles={trendingArticles} />}
                  </div>
                </div>
              ) : null}

              {/* Latest Articles Section */}
              <LatestArticles 
                articles={latestArticles} 
                page={page} 
                setPage={setPage} 
                totalPages={totalPages} 
              />

              {/* Newsletter Subscription */}
              <NewsletterSubscribe />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
