<script setup>
import { NavBar, SideBar, AlertToast } from '@/components';
</script>

<template>
  <NavBar />
  <div class="max-w-[1280px] mx-auto">
    <div class="flex">
      <SideBar />
      <div class="w-full">
        <slot></slot>
      </div>
    </div>
  </div>
  <AlertToast />
</template>