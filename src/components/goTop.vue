<template>
    <div>
        <router-link :to="to" class="goTop" @click.native="$urlHash('top')">
            <span><i class="fa-solid fa-arrow-up"></i></span><span>Top</span>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'goTop',
        props: ["to", ],
        data() {
            return {}
        },
        methods: {},
        watch: {

        },
        mounted() {}
    }
</script>

<style lang="scss" scoped>
    .goTop {
        position: fixed;
        z-index: 10;
        right: 50px;
        bottom: 50px;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: 1px solid #ffffff;
        background-color: #edae33;
        color: #212121;
        text-align: center;

        span {
            display: block;

            svg {
                position: relative;
                top: 8px;
            }

        }
    }

    @media screen and (min-width:560px) and (max-width:4000px) {
        .goTop {
            cursor: pointer;
            transition: all .3s;

            span svg {
                transition: all .3s;
            }

            &:hover {
                transition: all .3s;
                background-color: #ffffff;
                border: 1px solid #edae33;

                svg {
                    top: 2px;
                }
            }
        }
    }

    @media screen and (min-width:0px) and (max-width:959px) {
        .goTop {
            right: 10px;
            bottom: 20px;
            font-size: 16px;
        }
    }

    @media screen and (min-width:0px) and (max-width:599px) {
        .goTop {
            padding: 0 !important;

            span {
                font-size: 16px;
            }
        }
    }
</style>