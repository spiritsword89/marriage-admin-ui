<template>
    <div>
         <el-dialog
            v-model="dialogVisible"
            title="Create Custom Hobby"
            width="500">
            <div>
                <el-form
                    ref="hobbyRef"
                    style="max-width:600px"
                    :model="hobbyForm"
                    :rules="hobbyRules"
                    label-width="auto">
                    <el-form-item label="Hobby name" prop="name">
                        <el-input v-model="hobby.hobbyName" />
                    </el-form-item>

                    <el-form-item label="Hobby Code" prop="code">
                        <el-input v-model="hobby.hobbyCode" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onValidateClick">Validate</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="createHobby" :disabled="addButtonDisabled">
                Add
                </el-button>
            </div>
            </template>
        </el-dialog>
        <div class="function-list-header">
            <div class="function-area">
                <el-button type="primary" plain @click="onClickAddButton">
                    <el-icon class="el-icon--right"><Plus /></el-icon>
                    新增
                </el-button>
            </div>
        </div>

        <div class="table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="selection" width="95" />
                <el-table-column prop="hobbyCode" label="爱好代号" width="160" />
                <el-table-column prop="id" label="爱好id" width="160" />
                <el-table-column prop="hobbyName" label="爱好名称" width="220" />
                <el-table-column prop="created" label="创建时间" width="220">
                    <template #default="scope">
                        <span>{{ dateUtil.convertDateFormat(scope.row.created)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createdBy" label="创建者" width="220" />
            
                
                <el-table-column fixed="right" label="操作" min-width="120">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="stopHobby(scope.row.hobbyCode)">
                            停用
                        </el-button>
                        
                        <el-button link type="primary" size="small">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import * as dateUtil from '../../tools/DateFormatUtil.js'
import { ref, reactive } from 'vue'
import { loadHobbyByPage, validateHobby, addHobby } from '../../api'
export default {

    mounted() {
        this.loadHobby()
    },

    setup() {
        let tableData = ref([])

        let hobby = reactive({
            hobbyName: '',
            hobbyCode: ''
        })

        let page = 1
        let pageSize = 50

        let dialogVisible = ref(false)
        let addButtonDisabled = ref(true)

        async function loadHobby() {
            const { data: data } = await loadHobbyByPage({
                page: page,
                size: pageSize
            })

            tableData.value = data
        }

        function onClickAddButton() {
            dialogVisible.value = true
        }

        async function onValidateClick() {
            if(!hobby.hobbyCode) {
                return
            }
            const { data: data} = await validateHobby({
                hobbyCode: hobby.hobbyCode
            })

            addButtonDisabled.value = !data
        }

        async function createHobby() {
            try {
                await addHobby(hobby)
                
                page = 1
                
                await loadHobby()

                dialogVisible.value = false

            }catch(err) {
                console.log(err)
                
            }

            hobby = {
                        hobbyName: '',
                        hobbyCode: ''
                    }      
        }

        return {
            tableData,
            hobby,
            dialogVisible,
            addButtonDisabled,
            dateUtil,
            loadHobby,
            onClickAddButton,
            onValidateClick,
            createHobby
        }
    }
}
</script>

<style lang="scss" scoped>
.function-area {
    width: 100%;
    margin-top: 15px;
    padding: 0 24px;
    display: flex;
    justify-content: left;
}
.table {
    margin-top: 20px;
    padding: 0 24px;
}

</style>