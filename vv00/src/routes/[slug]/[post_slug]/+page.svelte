<script lang="ts">
    export let data;
    const { post, comments } = data;
</script>

<article>
    <h1>{post.title}</h1>
    <p>{@html post.content}</p>
</article>