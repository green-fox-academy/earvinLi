'use strict';

const BlogPost = require('./02-blog-post');

class Blog {
  constructor() {
    this.blogs = [];
  }

  add(blog) { this.blogs.push(blog); }

  delete(index) { this.blogs.splice(index, 1); };

  update(index, blogPost) { this.blogs[index] = blogPost; }
}

const blogOne = new Blog();
blogOne.add(new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'));
blogOne.add(new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'));

console.log(blogOne);

blogOne.delete(1);

console.log(blogOne);

blogOne.update(0, new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.'));

console.log(blogOne);
