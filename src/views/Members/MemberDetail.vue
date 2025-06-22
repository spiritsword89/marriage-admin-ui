<template>
    <div class="content-area">
        <div class="member-base-details">
            <div class="member-photo-area">

            </div>

            <div class="base-detail-area">

            </div>
        </div>

        <div class="member-more-details">

        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
import { useRoute } from 'vue-router'
import { loadMemberDetails } from '../../api'
export default {
    beforeMount() {
        this.loadDetail()
    },
    
    setup() {
        const route = useRoute()
        const id = route.query.id

        let member = reactive({});
        
        async function loadDetail() {
            const {data: data} = await loadMemberDetails(id)
            member = data
            console.log(member)
        }

        return {
            member,
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
        width: 49%;
    }
}
</style>