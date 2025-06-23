<template>
    <div>
         <el-dialog
            v-model="dialogVisible"
            title="Create Custom Feature"
            width="500">
            <div>
                <el-form
                    ref="featureRef"
                    style="max-width:600px"
                    :model="featureForm"
                    :rules="featureRules"
                    label-width="auto">
                    <el-form-item label="Feature name" prop="name">
                        <el-input v-model="feature.featureName" />
                    </el-form-item>

                    <el-form-item label="Feature Code" prop="code">
                        <el-input v-model="feature.featureCode" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onValidateClick">Validate</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="createFeature" :disabled="addButtonDisabled">
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
                <el-table-column prop="featureCode" label="特点代号" width="160" />
                <el-table-column prop="id" label="特点id" width="160" />
                <el-table-column prop="featureName" label="特点名称" width="220" />
                <el-table-column prop="created" label="创建时间" width="220">
                    <template #default="scope">
                        <span>{{ dateUtil.convertDateFormat(scope.row.created)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createdBy" label="创建者" width="220" />
            
                
                <el-table-column fixed="right" label="操作" min-width="120">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="stopFeature(scope.row.featureCode)">
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
import { loadFeaturesByPage, validateFeature, addFeature } from '../../api'
export default {

    mounted() {
        this.loadFeatures()
    },

    setup() {
        let tableData = ref([])

        let feature = reactive({
            featureName: '',
            featureCode: ''
        })

        let page = 1
        let pageSize = 50

        let dialogVisible = ref(false)
        let addButtonDisabled = ref(true)

        async function loadFeatures() {
            const { data: data } = await loadFeaturesByPage({
                page: page,
                size: pageSize
            })

            tableData.value = data
        }

        function onClickAddButton() {
            dialogVisible.value = true
        }

        async function onValidateClick() {
            if(!feature.featureCode) {
                return
            }
            const { data: data} = await validateFeature({
                featureCode: feature.featureCode
            })

            addButtonDisabled.value = !data
        }

        async function createFeature() {
            try {
                await addFeature(feature)
                
                page = 1
                
                await loadFeatures()

                dialogVisible.value = false

            }catch(err) {
                console.log(err)
                
            }

            feature = {
                        featureName: '',
                        featureCode: ''
                    }      
        }

        return {
            tableData,
            feature,
            dialogVisible,
            addButtonDisabled,
            dateUtil,
            loadFeatures,
            onClickAddButton,
            onValidateClick,
            createFeature
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