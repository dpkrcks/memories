import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

//route to get posts
router.get('/', getPosts);

//route to create posts
router.post('/', createPost);

//route to update posts
router.patch('/:id', updatePost);

//route to delete
router.delete('/:id', deletePost);

//route to like post
router.patch('/:id/likePost', likePost);

export default router;