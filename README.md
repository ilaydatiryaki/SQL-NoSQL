# Veritabanı

######

Veritabanı genellikle bilgisayar sisteminde elektronik olarak depolanan yapılandırılmış bilgi veya veriden oluşmaktadır. Veritabanı genellikle bir veritabanı yönetim sistemi (DBMS) ile kontrol edilir. Veri ve DBMS ve aynı zamanda bunlarla ilişkili uygulama yazılımları bir araya getirildiğinde sıklıkla yalnızca veritabanı olarak kısaltılan veritabanı sistemi olarak ifade edilir.

Günümüzde operasyonda kullanılan en yaygın veritabanı türlerindeki veri genellikle işlemeyi ve veri sorgulamayı verimli hale getirmek üzere bir dizi tablodaki satırlarda ve sütunlarda modellenir. Böylece veri kolayca erişilebilir, yönetilebilir, değiştirilebilir, güncellenebilir, kontrol edilebilir ve organize edilebilir hale getirilir. Çoğu veritabanında veri yazma ve sorgulama için yapılandırılmış sorgu dili (SQL) kullanılır.


[docs](https://www.oracle.com/tr/database/what-is-database/)

![photo](https://miro.medium.com/max/700/1*zkbyXAD5EgU5yQbPfstVlA.png)



### İlişkisel Veritabanı

###### 

İlşkisel veritabanı, birbiriyle ilişkili veri noktalarını depolayabilen ve bunlara erişim sağlayabilen bir veritabanı türüdür. İlişkisel veritabanları, verileri tablolarla temsil etmenşn sezgisel ve kolay anlaşılabilen yolu olan ilişkisel modeli temel olarak almaktadır. Bu veritabanında, tablodaki her satır anahtar(key) adı verilen benzersiz kimliğe sahip bir kayıttır. Tablo sütunlarında verilerin öznitelileri bulunur ve her kayıt genellikle her öznitelik için bir değer(value) taşımaktadır. Bu durum da veri noktaları arasında ilişki kurmayı kolaylaştırmaktadır. 
Veriler ilişkisel veri tabanlarında tablolar halinde tutulmaktadır. İlişkisel veri tabanları ile çalışırken kullandığımız sorgulama dili ise SQL’dir. 
İlişkisel veri tabanlarında bulunan bütün tablolar birbiri ile bağlantılıdır. Tüm verileri tek tabloda tutmayıp hepsini farklı farklı tablolara ayırıp aralarında ilişki kurmamızın sebebi ise veri tekrarını önlemek, daha kolay yönetebilmek ve daha kolay sorgulama yapabilmektir.

[docs](https://www.oracle.com/tr/database/what-is-a-relational-database/)

### İlişkisel Olmayan Veritabanı

######

İlişkisel olmayan veritabanı, geleneksel veritabanı sistemlerinin çoğunda bulunan satırların ve sütunların tablo şemasını kullanmayan bir veritabanıdır. Bunun yerine ilişkisel olmayan veritabanları, depolanan veri türünün belirli gereksinimleri için iyileştirilmiş bir depolama modeli kullanır. Örneğin, veriler basit anahtar/değer(key/value) çiftleri olarak, JSON belgeleri olarak veya kenarlardan ve köşelerden oluşan bir grafik olarak depolanmış olabilir.

Pratikte, "NoSQL" "ilişkisel olmayan veritabanı" anlamına gelir, ancak bu veritabanlarının çoğu, SQL sorguları destekler. Temel alınan sorgu yürütme stratejisi genellikle geleneksel RDBMS'nin aynı sorguyu yürütme SQL farklıdır.

NoSQL, sabit bir şema gerektirmeyen ve ölçeklemesi kolay ilişkisel olmayan bir veri tabanı sistemidir. NoSQL, gün geçtikçe artan büyük veri depolama ihtiyaçlarını karşılamak ve gerçek zamanlı verileri depolamak için kullanılmaktadır. İlişkisel Veri Tabanı Yönetim Sistemlerinden en büyük farkı ise yarı yapılandırılmış veya yapılandırılmamış verileri de depolayabilmektedir. Bu nedenle her gün terabaytlarca yapılandırılmamış kullanıcı verisi toplayan Twitter, Facebook, Google gibi şirketler NoSQL veri tabanlarını kullanmaktadır.

NoSQL veri tabanları belge tabanlı çalışır ve veriler tablo olarak değil JSON belgesi olarak tutulur. Burada sütuna karşılık anahtar, satıra karşılık ise değer terimleri kullanılmaktadır.


[docs](https://docs.microsoft.com/tr-tr/azure/architecture/data-guide/big-data/non-relational-data#:~:text=%C4%B0li%C5%9Fkisel%20olmayan%20veritaban%C4%B1%2C%20geleneksel%20veritaban%C4%B1,iyile%C5%9Ftirilmi%C5%9F%20bir%20depolama%20modeli%20kullan%C4%B1r.)


### Yapılandırılmış Sorgu Dili (SQL)

###### 


SQL, ilişkisel bir veritabanındaki verileri tanımlamak ve işlemek için standartlaştırılmış bir dildir. İlişkisel veri modeline göre, veritabanı bir dizi tablo olarak algılanır, ilişkiler tablolardaki değerlerle temsil edilir ve veriler bir veya daha fazla temel tablodan türetilebilecek bir sonuç tablosu belirtilerek alınır.
SQL ifadeleri bir veritabanı yöneticisi tarafından yürütülür. Veritabanı yöneticisinin işlevlerinden biri, bir sonuç tablosunun belirtimini, veri alımını optimize eden bir dizi dahili operasyona dönüştürmektir. Bu dönüşüm, SQL deyimi hazırlandığında gerçekleşir. 

SQL kod örneği : 


```
SELECT * FROM Members WHERE Age > 30


```


[docs](https://www.ibm.com/docs/en/i/7.4?topic=concepts-structured-query-language)

![photo](https://gowithcode.com/wp-content/uploads/2021/04/sql-vs-nosql.jpg)


### Yapılandırılmamış Sorgu Dili (NoSQL)

###### 

Çok büyük hacimde ve hızla değişen yapılandırılmamış verileri, satırlar ve tablolar içeren bir ilişkisel (SQL) veritabanından farklı şekilde işleyebildiklerine vurgu yapmak için NoSQL veritabanları, “ilişkisel olmayan”, “NoSQL DB'ler” veya “SQL olmayan” olarak da adlandırmaktadır. Öngörülemeyen verileri işleme konusunda etkili olan ve genellikle çok yüksek sorgu hızları sunan NoSQL veritabanları, BT profesyonellerinin ve geliştiricilerin sürekli genişleyen veri türü ve modeli çeşitliliğini yönetmesine yardımcı olmaktadır. 

[docs](https://azure.microsoft.com/tr-tr/overview/nosql-database/)

### SQL ve NoSQL Arasındaki Farklar

######


![photo](https://media-exp1.licdn.com/dms/image/C4D12AQHLMqRynetbeg/article-inline_image-shrink_1000_1488/0/1609415891624?e=1648684800&v=beta&t=bDIMqoEth0e_K-Av4hRXCG0fKK6HbhqKsvpIfBUFtu0)

![photo](https://media-exp1.licdn.com/dms/image/C4D12AQGy1eDari80iw/article-inline_image-shrink_1000_1488/0/1609415902058?e=1648684800&v=beta&t=4N2cmW9K1lh4v6Xs5oIY0BtUogS7JY0AvP-K0PAy3pU)

#### SQL ile NoSQL Yapı Farkı Örneği

![photo](https://lennilobel.files.wordpress.com/2015/07/i2.png)

```Tanım```

SQL: Veritabanlarına öncelikle RDBMS veya İlişkisel Veritabanları denir.
######
NoSQL: Veritabanları öncelikle ilişkisel olmayan veya dağıtılmış veritabanı olarak adlandırılır.

```Sorgu dili```

SQL: Yapılandırılmış sorgu dili (SQL)
######
NoSQL: Bildirime dayalı sorgu dili yok

```Tip```

SQL: Veritabanları tablo tabanlı veritabanlarıdı.
######
NoSQL: Veritabanları belge tabanlı, anahtar/değer çiftleri, grafik veritabanları olabilir.

```Şema```

SQL: Veritabanlarının önceden tanımlanmış bir şeması vardır.
######
NoSQL: Veritabanları, yapılandırılmamış veriler için dinamik şema kullanır.

```Örnekler```

SQL: Oracle, Postgres, and MS-SQL.
######
NoSQL: MongoDB, Redis, Neo4j, Cassandra, Hbase.

```Hiyerarşik veri depolama```

SQL: Veritabanları hiyerarşik veri depolama için uygun değildir.
######
NoSQL: Anahtar/değer çifti yöntemini desteklediğinden hiyerarşik veri deposu için daha uygundur.


```En İyi Kullanım```

SQL: RDBMS veritabanı, ACID sorunlarını çözmek için doğru seçenektir.
######
NoSQL: Veri kullanılabilirliği sorunlarını çözmek için en iyi kullanılan yöntemdir.

```En Çok Kullanan Şirketler```

SQL: Hootsuite, CircleCI, Gauges
######
NoSQL: Airbnb, Uber, Kickstarter

[source](https://www.guru99.com/sql-vs-nosql.html) ve 
[docs](https://aws.amazon.com/tr/nosql/)
















