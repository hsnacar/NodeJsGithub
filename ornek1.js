/*
    NodeJS backend'de (sunucu tarafında) çalışan Javascript tabanlı bir 
    web geliştirme ortamıdır. PHP, ASP veya JSP yerine günümüzde çokça 
    tercih edilmektedir. 

    Eğer NodeJS kurulu değilse,
    https://nodejs.org/ adresine giderek LTS sürümü indirip kurmalısınız.
    
    Projemizi oluşturmak içinse:

    Proje için bir klasör oluşturup, macOS ve Linux sistemlerde Terminalde, 
    Windows'ta CMD'de:, bu klasöre gidip (cd projeklasörü)

            npm init -y 

    komutunu çalıştırıp proje başlangcını tetiklemelisiniz. 
    Eğer hata alırsanız sudo npm init -y şeklinde deneyebilirsiniz.
    Bu sayede package.json dosyası oluşacaktır.

            npm install express 

    komutu ile express modülünü projemize eklemiş oluyoruz.
    package.json dosyasında express'in kaydını görebilirsiniz.
    Bu komutla birlikte kurulu paketleri barındıran node_modules 
    isimli bir dizin, proje klasörümüzde oluşacaktır.

    Son olarak aşağıdaki kodları, proje klasörümüzde index.js
    dosyasını oluşturarak kaydedin ve terminalde 

            node index.js
    
    şeklinde çalıştırın. Tarayıcınızda http://localhost:3000/
    adresini açtığınızda Home Page ibaresi ile karşılaşıyorsanız
    ilk NodeJS projenizi ayağa kaldırmış oldunuz.

    Şimdi alttaki satırlardan neler oldu tek tek bakalım.
    
*/

// 
const express = require("express");
// Express modülünü sayfamıza dahil ettik.
// const sabit tanımlamak için kullanılır.
// require projeye dışarıda dosya dahil etme metotudur.

const server = express();
// express modulüne erişmek için server sabitini tanımladık.

server.get('/', (req, res) => {
    res.send("Home Page");
});
// Üstteki üç satırda sitenin, root yani '/' ile açıldığında
// ziyaretçiye ne gösterileceğini yazdık.
// get, tarayıcıdaki adres satırında yazan url'ye erişmek içindir.
// req, gelen istediği yakalamak içindir
// res, gelen isteğe verdiğimiz cevaptır
// (req, res) => { } kullanımı bir arrow function'dır. Bunu araştırıp öğrenmelisiniz.
// () => { } Bu kullanımı hemen yerde göreceksiniz, ne olduğunu iyice anlamak lazım.
// res.send ile gelen isteğe cevap vermiş oluyoruz.

server.get('/java', (req, res) => {
    res.send("Java Page");
});
// Eğer tarayıcıda http://localhost:3000/java adresi çağrılırsa bu kısım çalışacaktır.

server.get('/java/:lessonAlias', (req, res) => {
    const { lessonAlias } = req.params; // Bu atamanın nasıl bir anlama geldiğini de araştırın.
    res.send("Java Lessons Page: " + lessonAlias);
});
// Eğer tarayıcıda http://localhost:3000/java/ders-1 adresi çağrılırsa bu kısım çalışacaktır.

server.listen(3000, () => {
});
// sayfamıza gelen istekleri sunucu bu satırlarla 3000 portunda dinleme başlıyor.
// port numarasını dilediğimiz şekilde değiştirebilirsiniz