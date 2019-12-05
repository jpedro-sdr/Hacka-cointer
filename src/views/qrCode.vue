<template>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
</template>
<script>
export default {
    fiery: true,
    data () {
        return {
            // varejista: this.$fiery(firebase.firestore().collection('users').doc('varejista')),
            // consumidor: this.$fiery(firebase.firestore().collection('users').doc('consumidor')),

        }
    },
    methods: {
        onDecode (decodedString) {
            
            this.$router.push('/finalizandoOS')
           
        }
    }
}
</script>