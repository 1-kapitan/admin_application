<template>
  <DashboardWrapper>
    <AccountSettingsNav />
    <PersonalInfo/>
  </DashboardWrapper>
</template>

<script>
import AccountSettingsNav from '@/components/AccountSettingsNav.vue';
import DashboardWrapper from '@/utilities/DashboardWrapper.vue';
import PersonalInfo from './PersonalInfo.vue';

export default {
  components: { DashboardWrapper, AccountSettingsNav, PersonalInfo },
};
</script>
