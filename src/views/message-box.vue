<template>
    <div class="message-box">
        <div class="card">
            <div class="tabs">
                <div v-for="tab in tabs" :key="tab.name" :class="['tab', { active: activeTab === tab.name }]"
                    @click="showTab(tab.name)">
                    {{ tab.label }}
                </div>
            </div>

            <div v-for="(content, index) in contents" :key="content.name"
                :class="['content', content.name, { active: activeTab === content.name }]">

                <template v-if="todayContent(index).length > 0">
                    <h2 class="time-title">Today</h2>
                    <div class="news-card" v-for="news in todayContent(index)" :key="news.title">
                        <p>
                            <span class="news-title">{{ news.title }}</span>
                            <span class="news-date">{{ displayTime(news.date) }}</span>
                        </p>
                        <p class="news-content">
                            {{ news.content }}
                        </p>
                    </div>
                </template>

                <template v-if="earlyContent(index).length > 0">
                    <h2 class="time-title">Earlier</h2>
                    <div class="news-card" v-for="news in earlyContent(index)" :key="news.title">
                        <p>
                            <span class="news-title">{{ news.title }}</span>
                            <span class="news-date">{{ displayTime(news.date) }}</span>
                        </p>
                        <p class="news-content">
                            {{ news.content }}
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import dayjs from 'dayjs'


@Component
export default class RedditNotifications extends Vue {
    activeTab: string = 'activities';

    tabs = [
        { name: 'activities', label: 'News' },
        { name: 'messages', label: 'Messages' }
    ];

    contents = [
        {
            name: 'activities',
            news: [
                {
                    title: 'Breaking News Title Here!',
                    date: dayjs().subtract(2, 'second'),
                    content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...'
                },
                {
                    title: 'Breaking News Title Here!',
                    date: dayjs().subtract(2, 'minute'),
                    content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...'
                },
                {
                    title: 'Breaking News Title Here!',
                    date: dayjs().subtract(3, 'hour'),
                    content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...'
                },
                {
                    title: 'Breaking News Title Here!',
                    date: dayjs().subtract(3, 'day'),
                    content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...'
                },
                {
                    title: 'Breaking News Title Here!',
                    date: dayjs().subtract(3, 'month'),
                    content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...'
                },
                {
                    title: 'Breaking News Title Here!',
                    date: dayjs().subtract(3, 'year'),
                    content: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...'
                },
            ]
        },
        {
            name: 'messages',
            news: [
                {
                    title: 'Message Title Here!',
                    date: dayjs().subtract(2, 'day'),
                    content: 'This is your message content...This is your message content...This is your message content...This is your message content...This is your message content...This is your message content...'
                }
            ]
        }
    ];

    /** today's content*/
    todayContent(index: number) {
        return this.contents[index].news.filter((element) => {
            return dayjs().isSame(element.date, 'day');
        })
    }


    /** early content */
    earlyContent(index: number) {
        return this.contents[index].news.filter((element) => {
            return !dayjs().isSame(element.date, 'day');
        })
    }


    displayTime(time: any): string {
        const now = dayjs();
        const diffSec = now.diff(time, "second");
        const diffMin = now.diff(time, "minute");
        const diffHours = now.diff(time, "hour");
        const diffDays = now.diff(time, "day");
        const formattedTime = dayjs(time);

        if(diffSec < 60){
            return diffSec + "sec"
        }
        else if (diffMin < 60){
            return diffMin + "min"
        }
        else if (diffHours < 24) {
            return diffHours + "h";
        } else if (diffDays < 7) {
            return diffDays + "d";
        } else if (formattedTime.year() === now.year()) {
            return formattedTime.format("MMMM D");
        } else {
            return formattedTime.format("YYYY MMMM D");
        }
    }

    showTab(tabName: string) {
        this.activeTab = tabName;
    }
}
</script>

<style scoped lang="less">
.message-box {
    position: absolute;
    top: 18vh;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2rem;
    background-color: #2c2c2c;
    color: white;
    overflow-y: auto; // Allow scrolling if content is too tall
}

.card {
    background-color: #4e4e4e;
    padding: 2rem;
    border-radius: 0.5rem;
    max-width: 50rem;
    /* limiting the maximum width of the card */
    margin: 2rem auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
}

.news-card {
    cursor: pointer;
    padding: 1vh 1vw;
    transition: background-color 0.3s ease;
    /* 这行确保背景颜色过渡得很平滑 */
}

.news-card:hover {
    background-color: rgba(255, 255, 255, 0.1);
    /* 这是悬停时的背景颜色 */
}

.tabs {
    display: flex;
    border-bottom: 0.125rem solid #b9945ae4;
    justify-content: center;
}

.tab {
    padding: 1rem 2rem;
    margin: 0 1rem;
    cursor: pointer;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #b9945ae4;
    color: white;
    transition: background 0.2s;
}

.tab:hover {
    background-color: #bb9963e4;
}

.tab.active {
    background-color: #bf872b;
    border-bottom: 0.125rem solid #bf872b;
}

.content {
    display: none;
    padding-top: 2rem;
}

.content.active {
    display: block;
}

h2 {
    font-size: 1.3em;
    border-bottom: 0.0625rem solid #333;
    padding-bottom: 1rem;
}

.time-title:last-of-type{
    margin-top: 1.3vh;
}

.news-title {
    display: inline-block;
    font-weight: 700;
    margin-bottom: .5vh;
    font-family: "Georgia", serif;
    font-size: 1.1em;
}

.news-content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9em;
}

.news-date {
    font-family: Arial, sans-serif;
    font-size: 0.8em;
    color: #888;
    margin-left: 0.5em;
}

@media (max-width: 768px) {
    .message-box {
        top: 53vh;
        max-height: 65vh; // Adjust the max height for smaller screens if needed
        padding: 1rem;
    }

    .card {
        padding: 0.5rem;
        margin: 0.5rem auto;
    }

    .tabs .tab {
        padding: 0.3rem 0.5rem;
    }

    .news-card {
        padding: 0.5vh 0.5vw;
    }

    .content {
        padding-top: 1rem;
    }
}
</style>
