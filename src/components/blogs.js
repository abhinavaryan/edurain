import blogsData from '../data/blogs.json';

export function renderBlogs() {
    const blogsHtml = blogsData.map(blog => {
        const date = new Date(blog.date).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'short', day: 'numeric'
        });

        return `
            <div class="glass-card blog-card fade-in-section">
                <div class="blog-cover" style="background-image: url('${blog.coverImage}')"></div>
                <div class="blog-body">
                    <span class="blog-tag">${blog.category}</span>
                    <h3>${blog.title}</h3>
                    <p>${blog.excerpt}</p>
                    <div class="blog-meta">
                        <span class="blog-author">${blog.author}</span>
                        <span class="blog-date">${date}</span>
                        <a href="#" class="read-more">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <section class="blogs-section" id="blogs">
            <div class="section-header">
                <h2>Latest from Our Blog</h2>
                <p>Insights, tips, and news from EduRain</p>
            </div>
            <div class="blogs-grid">
                ${blogsHtml}
            </div>
        </section>
    `;
}
