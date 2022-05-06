Vue.component('komponen-produk-terbaru2',{
	filters: {
                  format_rupiah: function(value) {
                    var formatter = new Intl.NumberFormat("en-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0
                    });
                    return formatter.format(value);
                  }
                },
	template: `	
	      
	      <div class="row row-cols-1 row-cols-md-2 g-4">  
	        <div class="card text-dark bg-white border-2 border-dark rounded" style="width: 14rem;" v-for="(produk, index) of produks" :key="index">
	        <img width=200 :src="produk.link_gambar" />
	        <div class="card-body ">
	          <h5 class="card-title"><strong>{{ produk.nama }}</strong></h5>
	          <p class="card-text">{{ produk.deskripsi }} <br><br>
	                               <h4><strong>{{ produk.harga | format_rupiah }} </strong></h4> <br> 
	          </p>
	        </div>
	      </div>
	    </div>    

		`,
		
		data: function(){
			return {			   
               produks : [
                       {
		                id: 5,
		                nama: 'MUSKEN',
		                harga: 4999000,
		                deskripsi: 'Lemari, putih',
		                kategori: 'Lemari Pakaian',
		                stok_tersedia: 650,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/903/0590338_PE673833_S4.jpg'
		               },
		               {
		                id: 4,
		                nama: 'DYRGRIP',
		                harga: 69900,
		                deskripsi: 'Gelas kaca bening',
		                kategori: 'Gelas Minum',
		                stok_tersedia: 400,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/132/0713234_PE729344_S4.jpg'
		               },
		               {
		                id: 3,
		                nama: 'INGARED',
		                harga: 199000,
		                deskripsi: 'Lampu meja, krem',
		                kategori: 'Lampu Meja',
		                stok_tersedia: 550,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/093/0609351_PE684472_S4.jpg'
		               },
		               {
		                id: 2,
		                nama: 'BRIMNES',
		                harga: 5097000,
		                deskripsi: 'Penyimpanan tv, hitam',
		                kategori: 'Meja TV',
		                stok_tersedia: 800,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/241/0724178_PE734352_S4.jpg'
		               },
                       {
		                id: 1,
		                nama: 'NISSE',
		                harga: 950000,
		                deskripsi: 'Kursi lipat, hitam',
		                kategori: 'Kursi',
		                stok_tersedia: 755,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/281/0728163_PE736118_S4.jpg'
		               }
		              
		              
		              
		                  
				]
			}
		}
})

var vm = new Vue({
    		el: '#konten',

    	})