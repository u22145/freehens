<template>
    <div id="recaptcha" class="g-recaptcha" data-size="invisible"></div>
</template>

<script>
    export default {
        name: 'googleRecapcha',
        data() {
            return {
                sitekey: '6Lcs9CklAAAAAOdIPv-BQnq_NQ4V8PZ4hTntoTCN'
            }
        },
        methods: {
            execute() {
                window.grecaptcha.execute();
            },
            reset() {
                window.grecaptcha.reset();
            },
            render() {
                let me = this;
                if (window.grecaptcha) {
                    this.widgetId = window.grecaptcha.render('recaptcha', {
                        sitekey: this.sitekey,
                        size: 'invisible',
                        callback: (token) => {
                            me.$emit('getGoogle', token)
                            me.reset()
                        }
                    });
                }
            }
        },
        mounted() {
            this.render();
        }
    }
</script>
<style lang="scss" scoped>
    .grecaptcha-badge {
        visibility: hidden;
    }
</style>