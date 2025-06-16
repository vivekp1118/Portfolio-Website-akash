import React, { useState, useEffect } from "react";

interface BlogPost {
    id: string;
    title: string;
    brief: string;
    slug: string;
    coverImage?: {
        url: string;
    };
    publishedAt: string;
    readTimeInMinutes: number;
    url: string;
}

interface BlogResponse {
    data?: {
        publication?: {
            posts?: {
                edges: Array<{
                    node: BlogPost;
                }>;
            };
        };
    };
    errors?: Array<{
        message: string;
    }>;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async (): Promise<void> => {
            try {
                const response = await fetch("https://gql.hashnode.com/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: `
                            query Publication {
                                publication(host: "aakashdeep8530.hashnode.dev") {
                                    posts(first: 6) {
                                        edges {
                                            node {
                                                id
                                                title
                                                brief
                                                slug
                                                coverImage {
                                                    url
                                                }
                                                publishedAt
                                                readTimeInMinutes
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: BlogResponse = await response.json();

                if (data.errors && data.errors.length > 0) {
                    throw new Error(data.errors[0].message);
                }

                if (data.data?.publication?.posts?.edges) {
                    const blogPosts: BlogPost[] = data.data.publication.posts.edges.map((edge) => edge.node);
                    setPosts(blogPosts);
                } else {
                    setError("No posts found");
                }
            } catch (error) {
                console.error("Error fetching blog posts:", error);
                const errorMessage = error instanceof Error ? error.message : "Failed to fetch blog posts";
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    if (loading) {
        return (
            <section
                id="blog"
                className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Latest Blog Posts
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">Sharing insights on DevOps, Cloud, and Technology</p>
                    </div>
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-gray-600 dark:text-gray-300">Loading latest posts...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section
                id="blog"
                className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Latest Blog Posts
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">Sharing insights on DevOps, Cloud, and Technology</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
                            <p className="text-red-600 dark:text-red-400 mb-4">Unable to load blog posts: {error}</p>
                            <a
                                href="https://aakashdeep8530.hashnode.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                                <span>Visit Blog Directly</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="blog"
            className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Latest Blog Posts
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">Sharing insights on DevOps, Cloud, and Technology</p>
                    <a
                        href="https://aakashdeep8530.hashnode.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                        </svg>
                        <span>Visit My Blog</span>
                    </a>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: BlogPost) => (
                            <article
                                key={post.id}
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-white/20"
                            >
                                {post.coverImage?.url && (
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={post.coverImage.url}
                                            alt={post.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                )}

                                <div className="p-6">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                                        <span className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span>{post.readTimeInMinutes} min read</span>
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.brief}</p>

                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                                    >
                                        <span>Read More</span>
                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto border border-white/20">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">No blog posts found</p>
                            <a
                                href="https://aakashdeep8530.hashnode.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Visit Blog</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
