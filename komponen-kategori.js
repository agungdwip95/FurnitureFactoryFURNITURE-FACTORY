Vue.component('komponen-kategori',{
	template: `
		<div class="row" style="padding-left: 33px;">
	      <div class="card mb-1 border-5 border-dark rounded" style="max-width: 540px;"  v-for="(kategori, index) of kategoris" :key="index">
	        <div class="row g-0">
	          <div class="col-md-4">
	            <img :src="kategori.link_gambar" class="img-fluid rounded-start" :alt="kategori.nama">
	          </div>
	          <div class="col-md-8">
	            <div class="card-body">
	              <h5 class="card-title">{{ kategori.nama }}</h5>
	              <p class="card-text">{{ kategori.deskripsi }}</p>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
		`,
		
		data: function(){
			return {			   
               kategoris : [
		    			    {
								id: 1,
								nama: 'Kursi',
								deskripsi: 'Nikmati setiap momen dengan kursi yang nyaman dan penuh gaya. Kursi kami hadir dalam beragam desain sehingga Anda dapat menyesuaikannya dengan kebutuhan.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/825/0782528_PE761355_S4.jpg'
							},
							{
								id: 2,
								nama: 'Meja TV',
								deskripsi: 'Kami memiliki berbagai tipe meja TV yang dapat Anda sesuaikan dengan kebutuhan. Penambahan rak TV minimalis akan membuat ruangan Anda terlihat sangat modern.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/733/0473390_PE614545_S4.jpg'
							},
							{
								id: 3,
								nama: 'Lampu Meja',
								deskripsi: 'Lampu meja memungkinkan Anda untuk mengatur suasana sebuah ruangan. lampu meja juga bisa menjadi pelengkap dekorasi baik di kamar, ruang kerja, atau ruang makan.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/354/0835435_PE778432_S4.jpg'
							},
							{
								id: 4,
								nama: 'Gelas Minum',
								deskripsi: 'Aneka gelas kaca kami tersedia dalam banyak model dan ukuran untuk menyesuaikan dengan kebutuhan serta selera Anda.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/628/1062845_PE851057_S4.jpg'
							},
							{
								id: 5,
								nama: 'Lemari Pakaian',
								deskripsi: 'Kami memiliki pilihan lemari, lemari pakaian 3 pintu hingga lemari terbuka. Apa pun gaya berpakaian Anda, rangkaian lemari pakaian kami akan memudahkan Anda menemukan pakaian favorit.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/803/0780372_PE760493_S4.jpg'
							},
							{
								id: 6,
								nama: 'Tempat Sampah',
								deskripsi: 'Temukan beragam pilihan tempat sampah berkualitas yang sesuai dengan kebutuhan Anda. Tersedia juga tempat sampah berpedal untuk menjaga tangan tetap bersih ketika ingin membuang sesuatu.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/290/1029080_PE835654_S4.jpg'
							},
							{
								id: 7,
								nama: 'Wajan',
								deskripsi: 'Sebagian besar koleksi wajan memiliki lapisan anti lengket untuk memudahkan Anda saat memasak dan mencuci. Beberapa koleksi peralatan masak lainnya dapat digunakan untuk menghemat energi.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/162/0916207_PE785032_S4.jpg'
							},
							{
								id: 8,
								nama: 'Sofa',
								deskripsi: 'Meluangkan waktu untuk duduk dan bersantai adalah salah satu kesenangan yang sederhana. Oleh karena itu kami menciptakan sofa yang lembut dan nyaman.',
								link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/288/0728848_PE736539_S4.jpg'
							}
						]
			}
		}
})

var vm = new Vue({
    		el: '#konten',

    	})