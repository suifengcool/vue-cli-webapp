<template>
  <section class="xxb-flexview">
    <!-- <slot name="navbar" v-if="showNavbar">
      <xxb-navbar :title="title" v-if="!!title">
          <router-link :to="link || '/'" slot="left">
            <xxb-navbar-back-icon></xxb-navbar-back-icon>
          </router-link>
      </xxb-navbar>
    </slot> -->

    <slot name="top"></slot>

    <section class="xxb-scrollview" ref="scrollView" id="scrollView">
      <slot></slot>
    </section>

    <slot name="bottom"></slot>

    <slot name="tabbar"></slot>
  </section>
</template>

<script type="text/babel">
  export default {
    name: 'xxb-layout',
    props: {
      link: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      showNavbar: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="less">
@import "../../../styles/variables";

.@{css-prefix} {
  &-view {
    margin: 0 auto;
    max-width: @max-width;
    min-width: @min-width;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: @navbar-height;
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: @body-padding-bottom * 3;
    }
  }

  .xxb-flexview {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: @max-width;
    min-width: @min-width;
  }

  .xxb-scrollview {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-bottom: -1px;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: @body-padding-bottom;
    }
  }
}

.ios .xxb-scrollview {
  margin-top: 1px;
}

.hairline .xxb-scrollview {
  margin-top: 0.5px;
}
</style>