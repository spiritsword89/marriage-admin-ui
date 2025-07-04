<template>
    <div class="member-main">
        <h2>
            会员列表
        </h2>
        <div class="member-table-area">
            <div class="search-criteria-area">
                <el-form :inline="true" :model="searchConditions" class="demo-form-inline">
                    <el-form-item label="城市">
                        <el-input v-model="searchConditions.city" placeholder="" clearable />
                    </el-form-item>
                    <el-form-item label="省份">
                        <el-input v-model="searchConditions.province" placeholder="" clearable />
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-select
                            v-model="searchConditions.gender"
                            clearable
                            placeholder="Select"
                            style="width: 240px"
                        >
                            <el-option value="MALE" label="男"></el-option>
                            <el-option value="FEMALE" label="女"></el-option>
                            
                        </el-select>
                    </el-form-item>

                    <el-form-item label="职业">
                        <el-select
                            v-model="searchConditions.jobType"
                            clearable
                            placeholder="选择"
                            style="width: 240px"
                        >
                            <el-option
                            v-for="item in jobType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="收入">
                        <el-input v-model="searchConditions.income" placeholder="" clearable />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary">Search</el-button>
                    </el-form-item>
                    
                 </el-form>

                  <el-collapse v-model="test" @change="handleChange" expand-icon-position="right">
                    <el-collapse-item name="1">
                        <!-- 自定义标题插槽 -->
                        <template #title>
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <span>设定更多搜索条件</span>
                            </div>
                        </template>

                        <!-- 面板内容 -->
                        <div>
                            <el-form :inline="true" :model="searchConditions" class="demo-form-inline">
                                <el-form-item label="最小年龄">
                                    <el-input v-model="searchConditions.ageLowerLimit" placeholder="" clearable />
                                </el-form-item>
                                <el-form-item label="最大年龄">
                                    <el-input v-model="searchConditions.ageUpperLimit" placeholder="" clearable />
                                </el-form-item>

                                <el-form-item label="最小身高">
                                    <el-input v-model="searchConditions.heightLowerLimit" placeholder="" clearable />
                                </el-form-item>

                                <el-form-item label="最大身高">
                                    <el-input v-model="searchConditions.heightUpperLimit" placeholder="" clearable />
                                </el-form-item>

                                <el-form-item label="最小体重">
                                    <el-input v-model="searchConditions.weightLowerLimit" placeholder="" clearable />
                                </el-form-item>

                                <el-form-item label="最大体重">
                                    <el-input v-model="searchConditions.weightUpperLimit" placeholder="" clearable />
                                </el-form-item>

                                <el-form-item label="最高学历">
                                    <el-select
                                        v-model="searchConditions.degrees"
                                        multiple
                                        clearable
                                        placeholder="选择（可多选)"
                                        style="width: 240px"
                                        >
                                        <el-option
                                            v-for="item in degrees"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        />
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="学院等级">
                                    <el-select
                                        v-model="searchConditions.universityTiers"
                                        multiple
                                        clearable
                                        placeholder="选择（可多选)"
                                        style="width: 240px"
                                        >
                                        <el-option
                                            v-for="item in universityTier"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        />
                                    </el-select>
                                </el-form-item>

                                 <el-form-item label="婚史">
                                    <el-select
                                        v-model="searchConditions.maritalStatus"
                                        clearable
                                        placeholder="Select"
                                        style="width: 240px"
                                    >
                                        <el-option
                                        v-for="item in maritalStatus"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        />
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>
                  </el-collapse>
            </div>

            <div class="function-area">
                <el-button type="primary" plain @click="onAddClick">
                    <el-icon class="el-icon--right"><Plus /></el-icon>
                    新增
                </el-button>
                <el-button type="success" plain>
                    <el-icon class="el-icon--right"><Upload /></el-icon>
                    导入</el-button>
                <el-button type="info" plain>
                    <el-icon class="el-icon--right"><Download /></el-icon>
                    导出</el-button> 
            </div>

            <div class="table">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="名字" width="120" />
                    <el-table-column prop="gender" label="性别" width="120" />
                    <el-table-column prop="memberAge" label="年龄" width="120" />
                    <el-table-column prop="height" label="身高(cm)" width="120" />
                    <el-table-column prop="jobType" label="职业" width="120" />
                    <el-table-column prop="locationCity" label="城市" width="120" />
                    <el-table-column prop="province" label="省份" width="120" />
                    <el-table-column prop="photos" label="照片数量" width="120" />
                    <el-table-column prop="fullVerified" label="已认证" width="120" />
                    <el-table-column prop="created" label="加入时间" width="120" />
                    <el-table-column fixed="right" label="操作" min-width="120">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="handleMemberDetailClick(scope.row.memberId)">
                                预览
                            </el-button>
                            <el-button link type="primary" size="small" @click="handleMemberEditClick(scope.row.memberId)">
                                编辑
                            </el-button>
                            <el-button link type="primary" size="small">
                                冻结
                            </el-button>
                            <el-button link type="primary" size="small">
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
             
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {reactive, ref} from 'vue'
import { jobType, maritalStatus, degrees, universityTier} from '../../assets/js/SelectItem.js'
import { loadMembersByPage } from '../../api'
export default {
    mounted() {
        this.loadMemberList()
    },

    setup() {
        const router = useRouter()

        let tableData = ref([])

        let searchConditions = reactive({
            city: null,
            province: null,
            jobType: null,
            gender: null,
            ageLowerLimit: null,
            ageUpperLimit: null,
            income: null,
            degrees: [],
            universityTiers: [],
            featureCodes: [],
            hobbyCodes: [],
            maritalStatus: null,
            heightLowerLimit: null,
            heightUpperLimit: null,
            weightLowerLimit: null,
            weightUpperLimit: null,
            hasCar: false,
            hasProperty: false,
            hasMemberConditions: false,
            page: 1,
            size: 30
        })

        function handleMemberDetailClick(memberId) {
            router.push({
                path: '/member/detail',
                query: {
                    id: memberId
                }
            })
        }

        function handleMemberEditClick(memberId) {
            router.push({
                path: '/member/detail',
                query: {
                    id: memberId
                }
            })
        }

        async function loadMemberList() {
            const {data: data } = await loadMembersByPage(this.searchConditions)
            tableData.value = data
        }

        function onAddClick() {
            router.push('/member/add')
        }
        
        return {
            tableData,
            searchConditions,
            jobType,
            maritalStatus,
            degrees,
            universityTier,
            onAddClick,
            loadMemberList,
            handleMemberDetailClick,
            handleMemberEditClick
        }
    }
}
</script>

<style lang="scss" scoped>
.search-criteria-area {
    width: 100%;
    min-height: 68px;
    height: auto;
}

.table {
    padding: 0 24px;
}

.function-area {
    width: 100%;
    margin-top: 15px;
    padding: 0 24px;
    display: flex;
    justify-content: left;
}
</style>