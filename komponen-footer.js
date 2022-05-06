Vue.component('komponen-footer',{
	template: `	

    <footer>
        <div class="container text-white text-center">
            <small>Copyright &copy; 2022 - <a href="https://github.com/agungdwip95" class="text-white fw-bold">Agung Dwi Prasetiyo</a></small>
        </div>
    </footer>
		
		`
})

var vm = new Vue({
    el: '#footer'
})