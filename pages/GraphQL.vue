<template>
    <div>
      <h1>hi</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="post in blogPosts" :key="post.id" class="post-card">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
  
  const GET_BLOG_POSTS = gql`
    query {
      posts {
        id
        title
        content
      }
    }
  `;
  
  export default {
    setup() {
      const { result } = useQuery(GET_BLOG_POSTS);
  
      return {
        loading: result.loading,
        blogPosts: result.data ? result.data.posts : [],
      };
    },
  };
  </script>
  
  <style>
  /* Add your CSS styling here if needed */
  </style>
  