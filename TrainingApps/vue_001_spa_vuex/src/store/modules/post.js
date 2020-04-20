export default {
    actions: {
        // async fetchPosts(ctx, limit = 3) {                               // 1
        // async fetchPosts({ commit, getters, dispatch }, limit = 3) {     // 2
        async fetchPosts({ commit, dispatch }, limit = 3) {                 // 3
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            const posts = await res.json();

            dispatch('sayHello');
            commit('updatePosts', posts);
        },
        sayHello(){
            console.log('Hello');
        }
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts;
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        }
    },
    state: {
        posts: []
    },
    getters: {
        validatePosts(state) {
            return state.posts.filter(p => (p.title && p.body));
        },
        allPosts(state) {
            return state.posts;
        },
        postsCount(state, getters) {
            return getters.validatePosts.length;
        }
    }
}
