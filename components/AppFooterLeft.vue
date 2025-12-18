<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
      class="flex flex-col w-full gap-4 py-4 text-xs leading-5 text-gray-500 dark:text-gray-400 sm:flex-row sm:justify-between sm:items-end">
    <div class="flex flex-col gap-1">
      <div>
        <span>© 2022-{{ currentYear }}
        <a
            href="https://www.locyan.cn/?utm_source=locyanfrp"
            target="_blank"
            class="hover:text-primary-500 hover:underline transition-colors ml-1"
        >杭州樱芸网络科技有限公司</a>。版权所有。
        </span>
      </div>

      <div>
        <span>
        <a
            href="https://www.locyan.cn/?utm_source=locyanfrp"
            target="_blank"
            class="hover:text-primary-500 hover:underline transition-colors"
        >Hangzhou Yingyun Network Technology Co., Ltd</a>. All right reserved.</span>
      </div>

      <div class="mt-1">
        <span>使用本站服务即代表您同意
        <a
            target="_blank"
            href="https://terms.locyan.cn/terms-of-service"
            class="hover:text-primary-500 hover:underline transition-colors"
        >服务条款</a>
        <span class="mx-1">|</span>
        <a
            target="_blank"
            href="https://terms.locyan.cn/privacy-policy"
            class="hover:text-primary-500 hover:underline transition-colors"
        >隐私政策</a>
        </span>
      </div>
    </div>

  </div>
</template>