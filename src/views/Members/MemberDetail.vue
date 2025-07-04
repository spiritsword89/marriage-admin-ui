<template>
    <div class="content-area">
        <div class="member-base-details">
            <div class="member-photo-area">
                <el-carousel indicator-position="outside" height="600px">
                    <el-carousel-item v-for="item in photoSelfies" :key="item.id">
                        <el-image style="width: 100%; height: 100%" :src="item.photoUrl" fit="cover"/>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="base-detail-area">
                <el-descriptions
                    class="margin-top"
                    :title="member.memberNickname"
                    :column="1"
                    :size="size"
                    :style="blockMargin"
                >
                    <!-- <template #extra>gender
                        <el-button type="primary">Operation</el-button>
                    </template> -->
                    <el-descriptions-item label="姓名">{{ member.name }}</el-descriptions-item>
                    <el-descriptions-item label="性别">{{ member.gender}}</el-descriptions-item>
                    <el-descriptions-item label="城市">{{ member.locationCity}}</el-descriptions-item>
                    <el-descriptions-item label="省份">{{ member.province}}</el-descriptions-item>
                    <el-descriptions-item label="年龄">{{ member.memberAge}}</el-descriptions-item>
                    <el-descriptions-item label="身高">{{ member.height}} cm</el-descriptions-item>
                    <el-descriptions-item label="体重">{{ member.weight}} kg</el-descriptions-item>
                    <el-descriptions-item label="职业">{{ member.jobType}}</el-descriptions-item>
                    <el-descriptions-item label="性格">
                        <span v-if="!member.feature || member.features.length === 0">暂无</span>

                        <el-tag v-else size="small" v-for="feature in member.features" :key="feature.id">{{ feature.featureName }}</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="爱好">
                        <span v-if="!member.hobbies || member.hobbies.length === 0">暂无</span>
                        <el-tag size="small" v-for="hobby in member.hobbies" :key="hobby.id">{{ feature.hobbyName }}</el-tag>
                    </el-descriptions-item>

                    <el-descriptions-item label="自我介绍">
                        <div></div>
                        {{ member.introduction}}
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </div>

        <div class="member-more-details">
            <div>
                <el-descriptions
                    class="margin-top"
                    title="More Details"
                    :column="5"
                    :size="size"
                    :style="blockMargin"
                >
                    <el-descriptions-item label="QQ号：">{{ member.qq }}</el-descriptions-item>
                    <el-descriptions-item label="微信号：">{{ member.wechatId}}</el-descriptions-item>
                    <el-descriptions-item label="小红书号：">{{ member.redNoteId}}</el-descriptions-item>
                    <el-descriptions-item label="微博号：">{{ member.weiboId}}</el-descriptions-item>
                    <el-descriptions-item label="邮箱：">{{ member.email}}</el-descriptions-item>
                    <el-descriptions-item label="电话：">{{ member.phone}}</el-descriptions-item>
                    <el-descriptions-item label="籍贯：">{{ member.birthPlace}}</el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, reactive, ref} from 'vue'
import { useRoute } from 'vue-router'
import { loadMemberDetails } from '../../api'
export default {
    mounted() {
        this.loadDetail()
    },
    
    setup() {
        const route = useRoute()
        const id = route.query.id

        let member = reactive({});

        let photoSelfies = ref([])

        const size = ref('default')

        const blockMargin = computed(() => {
                                const marginMap = {
                                    large: '32px',
                                    default: '28px',
                                    small: '24px',
                                }
                return {
                            marginTop: marginMap[size.value] || marginMap.default,
                        }
            })
        
        async function loadDetail() {
            const {data: data} = await loadMemberDetails(id)
            Object.assign(member, data)
            photoSelfies.value = member.allSelfies
        }

        return {
            member,
            size,
            photoSelfies,
            blockMargin,
            loadDetail
        }
    }
}
</script>

<style lang="scss" scoped>
.content-area {
    width: 1280px;
    margin: 0 auto;
}
.member-base-details {
    width: 100%;
    height: 60vh;
    padding: 28px;
    display: flex;
    justify-content: space-between;

    .member-photo-area {
        width: 50%;
    }

    .base-detail-area {
        width: 46%;
    }
}

.member-more-details {
    margin: 66px 0 0 0;
    padding: 12px 36px;
    border: 1px solid #c0c4cc;
    border-radius: 8px;
}
</style>