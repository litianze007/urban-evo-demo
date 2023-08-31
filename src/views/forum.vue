<template>
    <div class="forum">
        <div class="discussion-container">
            <!-- Discussion Title -->
            <div class="title">{{ discussionTitle }}</div>

            <!-- Topic Content -->
            <div class="topic-content">{{ topicContent }}</div>

            <!-- Comment Input -->
            <div class="comment-input-container">
                <textarea v-model="newComment" rows="4" placeholder="Write your comment..."></textarea>
                <button @click="sendComment" style="margin-top: 10px;">Send</button>
            </div>

            <!-- Comments -->
            <div v-for="comment in comments" :key="comment.id" class="comment">
                <div class="avatar" :style="{ backgroundImage: 'url(' + comment.avatar + ')' }"></div>
                <div style="margin-left: 1vw;">
                    <strong style="display:inline-block;margin-bottom: 2vh;font-weight: 500;">{{ comment.username }}</strong>
                    <p>{{ comment.content }}</p>
                    <div class="like-dislike-container">
                        <span class="like-icon" @click="likeComment(comment.id)">👍 Like</span>
                        <span class="dislike-icon" @click="dislikeComment(comment.id)">👎 Dislike</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface Comment {
    id: number;
    username: string;
    avatar: string;
    content: string;
}

@Component
export default class DiscussionModule extends Vue {
    discussionTitle: string = "The Evolution of Urban Planning: From Ancient Civilizations to Modern Metropolises";

    topicContent: string = `Historical overview of urban planning in ancient civilizations.
Renaissance urban planning and its influence.
The rise of modern urban planning in the 19th and 20th centuries.
Challenges and innovations in contemporary urban planning.`

    comments: Comment[] = [
        {
            id: 1,
            username: "Alice",
            avatar: require("@/assets/avatar.png"),
            content: "Regarding the urban planning project, I think we should prioritize green spaces to promote sustainability."
        },
        {
            id: 2,
            username: "Bob",
            avatar: require("@/assets/avatar.png"),
            content: "For the urban planning project, I believe we need more pedestrian zones to reduce traffic congestion."
        },
        {
            id: 3,
            username: "Charlie",
            avatar: require("@/assets/avatar.png"),
            content: "In my opinion, the urban planning project should focus on improving public transport to reduce carbon emissions."
        },
        {
            id: 4,
            username: "David",
            avatar: require("@/assets/avatar.png"),
            content: "The urban planning project should consider creating more cycling paths to encourage eco-friendly transportation."
        },
        {
            id: 5,
            username: "Eve",
            avatar: require("@/assets/avatar.png"),
            content: "I feel the urban planning project should prioritize affordable housing to ensure everyone has a place to live."
        }
    ];

    newComment: string = '';

    likeComment(commentId: number) {
        // Logic for liking a comment
        console.log(`Liked comment with ID: ${commentId}`);
    }

    dislikeComment(commentId: number) {
        // Logic for disliking a comment
        console.log(`Disliked comment with ID: ${commentId}`);
    }

    sendComment() {
        // Logic for sending the comment
        this.comments.push({
            id: this.comments.length,
            username: "Me",
            avatar: require("@/assets/avatar.png"),
            content: this.newComment
        })
        this.$message.success("Comment successful");
        this.newComment = ''; // Clear the comment field
    }
}
</script>

<style scoped lang="less">
.forum {
    display: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 50px 0;
    font-family: 'Georgia', serif;
    /* 更加优雅的字体 */
    background-color: #2C2C2C;
    color: white;
    z-index: 999;
}

.discussion-container {
    background-color: #4E4E4E;
    margin: 0 auto;
    padding: 2.5vw;
    width: 55%;
    /* 让讨论部分变窄 */
    border-radius: 10px;
}

.title {
    font-size: 28px;
    /* 更大的字体大小 */
    font-weight: bold;
    /* 加粗 */
    border-bottom: 2px solid #6E6E6E;
    /* 浅灰色分界线 */
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.topic-content {
    margin-bottom: 10vh;
}

.comment {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4vh;
    /* 增加评论间的间隔 */
    padding-bottom: 20px;
    border-bottom: 1px solid #6E6E6E;
    /* 评论间的分界线 */
    &:last-child{
        border-bottom: none;
    }
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background-size: cover;     /* Ensure the image covers the entire div */
    background-repeat: no-repeat;
    background-position: top;  /* Center the background image */
}

.comment-input-container {
    margin-bottom: 4vh;
}

button {
    display: block;
    background-color: #bf872b;
    color: white;
    margin: 0 auto;
    /* 水平居中 */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #b9945ae4;
}

.like-dislike-container {
    display: flex;
    padding-top:2vh;
    align-items: center;
}

.like-icon,
.dislike-icon {
    display: inline-block;
    /* 修改为inline-block以使其在同一行 */
    margin-right: 15px;
    cursor: pointer;
}

textarea {
    padding: 10px;
    border: 2px solid #bf872b;
    /* 添加边框 */
    border-radius: 5px;
    /* 圆角 */
    font-family: 'Georgia', serif;
    /* 使用与其他部分相同的字体 */
    background-color: #3C3C3C;
    /* 背景颜色 */
    color: white;
    /* 文字颜色 */
    transition: border-color 0.3s;
    /* 过渡效果 */
    width: 80%;
    /* 设置最大宽度为容器的80% */
    display: block;
    /* 使其成为块级元素 */
    margin: 0 auto;
    /* 水平居中 */
}

textarea:focus {
    border-color: #FF4500;
    /* 当聚焦时的边框颜色 */
    outline: none;
    /* 移除默认的轮廓 */
}

.comment p {
    font-size: 13px;
    word-wrap: break-word;
    max-width: 48vw;
    max-height: 100px;  // Or whatever height you find appropriate
    margin: 0;
}
</style>
