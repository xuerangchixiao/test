<template>
    <div style="width: 400px; margin: 150px auto;">
        <h1 style="text-align: center; margin-bottom: 20px;">登录</h1>
        <el-form label-width="80px" :model="user" ref="ruleFormRef" :rules="rules" size="large">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="user.userName" :prefix-icon="User"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="user.password" :prefix-icon="Lock" show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="submitForm(ruleFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import request from '@/api/request';
const ruleFormRef = ref<FormInstance>()


const rules = reactive<FormRules>({
    userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})

const user = reactive({
    userName: '',
    password: ''
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
    //   console.log('submit!')
    request.post('/user/login').then( (res: any) => {
        if( res.code === '200') {
            ElMessage({
                type: 'success',
                message: '请求成功'
            })
        } else {
            ElMessage({
                type: 'error',
                message: res.message
            })
        }
    })
    } else {
      ElMessage({
        type: 'error',
        message: '用户名或密码错误'
      })
    }
  })
}
</script>