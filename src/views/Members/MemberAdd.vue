<template>
    <div class="member-add-main">
        <h2>
            新增会员
        </h2>

        <div class="form-area">
            <ul class="form-list" :style="{ transform: `translateX(${currentListPosition}px)`}">
                <li>
                    <el-form
                    ref="formPageOne"
                    style="width: 624px"
                    :model="member"
                    :rules="memberRules"
                    label-width="auto">
                        <el-form-item label="姓氏" prop="lastName">
                            <el-input v-model="member.lastName" />
                        </el-form-item>

                        <el-form-item label="名字" prop="firstName">
                            <el-input v-model="member.firstName" />
                        </el-form-item>

                        <el-form-item label="性别" prop="gender">
                            <el-radio-group v-model="member.gender">
                                <el-radio :value="item.value" v-for="(item, index) in gender" :key="index">{{ item.label }}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="出生日期" prop="birthdate">
                             <el-date-picker
                                    v-model="member.birthdate"
                                    type="date"
                                    placeholder="选择日期"
                                    format="YYYY-MM-DD"
                                    value-format="YYYY-MM-DD"
                                    size="default"/>
                        </el-form-item>

                        <el-form-item label="账号ID" prop="memberLoginId">
                            <el-input v-model="member.memberLoginId" />
                        </el-form-item>

                        <el-form-item label="密码" prop="loginPassword">
                            <el-input v-model="member.loginPassword" type="password" autocomplete="off"/>
                        </el-form-item>

                        <el-form-item label="确认密码" prop="confirmPwd">
                            <el-input v-model="member.confirmPwd" type="password" autocomplete="off"/>
                        </el-form-item>

                        <el-form-item label="昵称" prop="name">
                            <el-input v-model="member.nickname" />
                        </el-form-item>

                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="member.email" />
                        </el-form-item>

                        <el-form-item label="电话" prop="phone">
                            <el-input v-model="member.phone" />
                        </el-form-item>

                        <el-form-item label="身高" prop="name">
                            <el-input-number v-model="member.height" :min="60" :max="250">
                                <template #suffix>
                                    <span>cm</span>
                                </template>
                            </el-input-number>
                        </el-form-item>

                        <el-form-item label="体重" prop="name">
                            <el-input-number v-model="member.weight" :min="30" :max="300">
                                <template #suffix>
                                    <span>kg</span>
                                </template>
                            </el-input-number>
                        </el-form-item>

                        <el-form-item label="家庭住址" prop="address">
                            <el-input v-model="member.address" />
                        </el-form-item>

                        <el-form-item label="居住城市" prop="city">
                            <el-input v-model="member.city" />
                        </el-form-item>

                        <el-form-item label="居住省份" prop="province">
                            <el-input v-model="member.province" />
                        </el-form-item>

                        <el-form-item label="居住地邮编" prop="zip">
                            <el-input v-model="member.zip" />
                        </el-form-item>
                    </el-form>
                </li>

                 <li>
                    <el-form
                    ref="formPageTwo"
                    style="width: 624px"
                    :model="member"
                    :rules="memberRules"
                    label-width="auto">

                        <el-form-item label="婚姻状况" prop="maritalStatus">
                            <el-select
                                v-model="member.maritalStatus"
                                placeholder="选择"
                                size="default"
                                style="width: 240px"
                                >
                                <el-option
                                    v-for="(item, index) in maritalStatus"
                                    :key="index"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="职业" prop="jobType">
                            <el-select
                                v-model="member.jobType"
                                placeholder="选择"
                                size="default"
                                style="width: 240px"
                                >
                                <el-option
                                    v-for="(item, index) in jobType"
                                    :key="index"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="工作种类" prop="employmentStatus">
                            <el-select
                                v-model="member.employmentStatus"
                                placeholder="选择"
                                size="default"
                                style="width: 240px"
                                >
                                <el-option
                                    v-for="(item, index) in employementStatus"
                                    :key="index"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="学历" prop="degree">
                            <el-select
                                v-model="member.degree"
                                placeholder="选择"
                                size="default"
                                style="width: 240px"
                                >
                                <el-option
                                    v-for="(item, index) in degrees"
                                    :key="index"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="学院等级" prop="universityTier">
                            <el-select
                                v-model="member.universityTier"
                                placeholder="选择"
                                size="default"
                                style="width: 240px"
                                >
                                <el-option
                                    v-for="(item, index) in universityTier"
                                    :key="index"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="MBTI" prop="personality">
                            <el-select
                                v-model="member.personality"
                                placeholder="选择"
                                size="default"
                                style="width: 240px"
                                >
                                <el-option
                                    v-for="(item, index) in MBTI"
                                    :key="index"
                                    :label="item"
                                    :value="item"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="家庭成员" prop="name">
                            <el-input-number v-model="member.numOfFamilyMembers" :min="0" :max="20">
                                
                            </el-input-number>
                        </el-form-item>
                       
                        <el-form-item label="微信号" prop="wechatId">
                            <el-input v-model="member.wechatId" />
                        </el-form-item>

                        <el-form-item label="QQ号" prop="name">
                            <el-input v-model="member.qq" />
                        </el-form-item>

                        <el-form-item label="抖音号" prop="name">
                            <el-input v-model="member.tiktokId" />
                        </el-form-item>

                        <el-form-item label="小红书" prop="name">
                            <el-input v-model="member.redNoteId" />
                        </el-form-item>

                        <el-form-item label="微博" prop="name">
                            <el-input v-model="member.weiboId" />
                        </el-form-item>
                    </el-form>
                </li>

                <li>
                    <el-form
                    ref="ruleFormRef"
                    style="width: 624px"
                    :model="member"
                    :rules="memberRules"
                    label-width="auto">
                        <div style="text-align:left; font-size: 14px; font-weight: bold; margin-bottom: 6px; margin-left: 4px">
                            <span>自我简介 (展示给配对会员，请认真填写)</span>
                        </div>
                        <el-input
                            v-model="member.introduction"
                            maxlength="2000"
                            style="width: 100%"
                            placeholder="输入内容"
                            rows="14"
                            show-word-limit
                            type="textarea"
                        />

                        <div style="text-align:left; font-size: 14px; font-weight: bold; margin-top: 46px; margin-bottom: 6px; margin-left: 4px">
                            <span>对另一半的要求 (展示给配对会员，请认真填写)</span>
                        </div>
                        <el-input
                            v-model="member.hopeForPartner"
                            maxlength="2000"
                            style="width: 100%"
                            placeholder="输入内容"
                            rows="14"
                            show-word-limit
                            type="textarea" />
                    </el-form>
                </li>
            </ul>
            
        </div>

        <div class="form-button-area">
            <el-button type="danger" plain @click="cancel">取消</el-button>
            <el-button type="info" plain :disabled="currentFormPage === 0" @click="prev()">上一步</el-button>
            <el-button type="primary" plain v-show="currentFormPage < 2" @click="next()">下一步</el-button>
            <el-button type="primary" plain v-show="currentFormPage === 2" @click="submit()">提交</el-button>
        </div>
    </div>
</template>

<script>
import { ElMessageBox, ElMessage } from 'element-plus'
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { saveMember } from '../../api'
import { MBTI, jobType, maritalStatus, degrees, employementStatus, universityTier, gender } from '../../assets/js/SelectItem.js' 
export default {
    setup() {
        const router = useRouter()
        let currentFormPage = ref(0);
        let currentListPosition = ref(0)
        let member = reactive({
            firstName: '',
            lastName: '',
            memberLoginId: '',
            loginPassword: '',
            confirmPwd: '',
            nickname: '',
            gender: '',
            email: '',
            weight: '',
            height: '',
            birthdate: '',
            personality: '',
            numOfFamilyMembers: '',
            introduction: '',
            hopeForPartner: '',
            wechatId: '',
            qq: '',
            tiktokId: '',
            redNoteId: '',
            weiboId: '',
            phone: '',
            address: '',
            city: '',
            province: '',
            street: '',
            district: '',
            zip: '',
            jobType: '',
            employmentStatus: '',
            maritalStatus: '',
            degree: '',
            universityTier: ''
        })

        const formPageOne = ref()
        const formPageTwo = ref()

        function next() {
            if(currentFormPage.value < 3) {
                if(currentFormPage.value === 0) {
                    formPageOne.value.validate((valid) => {
                        if(valid) {
                            currentFormPage.value++
                        } else {
                            ElMessage("请填写表单必填项")
                        }
                    })
                }
                if(currentFormPage.value === 1) {
                    formPageTwo.value.validate((valid) => {
                        if(valid) {
                            currentFormPage.value++
                        } else {
                            ElMessage("请填写表单必填项")
                        }
                    })
                }
               
            }
        }

        function prev() {
            if(currentFormPage.value > 0) {
                currentFormPage.value--
            }
        
        }

        let memberRules = reactive({
            firstName: [
                { required: true, message: '请输入名字', trigger: 'blur' },
                { min: 1, max: 20, message: '长度不能大于20', trigger: 'blur' }
            ],
            lastName: [
                { required: true, message: '请输入姓氏', trigger: 'blur' },
                { min:1, max: 10, message: '长度不能大于10', trigger: 'blur' }
            ],
            gender: [
                { required: true, message: '请选择性别', trigger: 'blur' },
            ],
            birthdate: [
                { required: true, message: '请选择出生日期', trigger: 'blur' },
            ],
            memberLoginId: [
                { required: true, message: '请创建账号', trigger: 'blur' },
            ],
            loginPassword: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            confirmPwd: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            email: [
                { required: true, message: '请输入邮箱', trigger: 'blur' },
            ],
            phone: [
                { required: true, message: '请输入联系电话', trigger: 'blur' },
            ],
            address: [
            { required: true, message: '请输入住址', trigger: 'blur' },
            ],
            city: [
                { required: true, message: '请输入居住城市', trigger: 'blur' },
            ],
            province: [
                { required: true, message: '请输入居住省份', trigger: 'blur' },
            ],
            zip: [
                { required: true, message: '请输入邮编', trigger: 'blur' },
            ],
            maritalStatus: [
                { required: true, message: '请选择婚姻状况', trigger: 'blur' },
            ],
            jobType: [
                { required: true, message: '请选择职业', trigger: 'blur' },
            ],
            employmentStatus: [
                { required: true, message: '请选择工作状况', trigger: 'blur' },
            ],
            degree: [
                { required: true, message: '请选择学历', trigger: 'blur' },
            ],
            universityTier: [
                { required: true, message: '请选择毕业校园等级', trigger: 'blur' },
            ],

            wechatId: [
                { required: true, message: '请填写微信ID', trigger: 'blur' },
            ],

            personality: [
                { required: true, message: '请选择性格', trigger: 'blur' },
            ]
        })

        function cancel() {
            ElMessageBox.confirm('此操作将会丢失已填写的数据，是否继续？', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                router.back()
            }).catch(() => {
                
            })
        }

        async function submit() {
            if(!member.introduction) {
                ElMessage('请认真填写自我简介')
            }

            if(!member.hopeForPartner) {
                ElMessage('请认真填写对另一半的要求')
            }

            try {
                const data= await saveMember(member)

                console.log(data)
            
                if(data.status === 200) {
                    router.push('/')
                } else {
                    ElMessage('保存失败')
                }
            }catch(err) {
                ElMessage('保存失败')
            }

        }

        watch(currentFormPage, (newVal) => {
            currentListPosition.value = newVal * -624
        })

        return {
            member,
            memberRules,
            currentFormPage,
            currentListPosition,
            MBTI,
            jobType,
            employementStatus,
            maritalStatus,
            degrees,
            universityTier,
            gender,
            formPageOne,
            formPageTwo,
            cancel,
            next,
            prev,
            submit
        }
    }
}
</script>

<style lang="scss" scoped>
.member-add-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-area {
    width: 624px;
    overflow: hidden;
    transform: translateX();
    .form-list {
        width: 2496px;
        height: 100%;
        transition: transform 0.5s ease;

        li {
            float: left;
        }
    }
}
</style>