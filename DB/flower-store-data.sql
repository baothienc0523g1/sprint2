use flower_store;

insert into roles (`name`)
values 
("ADMIN"),
("MEMBER");

insert into product_type (`name`)
values
("Hoa sinh nhật"),
("Hoa sự kiện"),
("Hoa và cây");

insert into products (`name`, price, product_type_id, `code`, `description`)
values
("Nụ cười của Em", 300000, 3, "H0001", "Bó hoa cực kỳ xinh xắn và trong trẻo được gói từ những cành hoa hồng song hỷ, hoa đồng tiền cùng điểm thêm chút tinh khôi từ hoa baby trắng chắc chắn sẽ là món quà tuyệt vời cho mọi dịp!"),
("Forever 18", 432000, 1, "H0002","Bó hoa Hồng đỏ đầy lãng mạn là món quà hoàn hảo thay lời muốn nói gửi đến người thương của bạn vào Valentine hoặc ngày kỷ niệm, sinh nhật. Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Oceanic", 469000, 1, "H0003", "Oceanic - những đóa hoa hồng mang màu biển cả, đong đầy tình yêu thương, gửi gắm đến người yêu thương của bạn!"),
("Dream Catcher", 399000, 1, "H0004", "Bó hoa baby hồng dịu dàng sẽ là món quà đầy ý nghĩa dành tặng người thương.  Bó hoa Dreamcatcher gồm: - Hoa Baby xịt hồng  * Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Syrah", 429000, 1, "H0005", "Ngọt ngào đến mấy cũng không bằng những cành hồng Ohara đỏ dành tặng em! Cùng khiến người thương bất ngờ và hạnh phúc trong mọi dịp đặc biệt với bó hoa siêu lãng mạn Syrah này nha! Bó Hoa Hồng Ohara Syrah gồm: 10 Bông Hồng Ohara Đỏ, Hoa Cầu Gai Đỏ, Các loại hoa và lá trang trí khác  * Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Summer Delight", 329000, 1, "H0006", "Sắc cam rực rỡ của những cành hoa hồng David mang lại nguồn năng lượng tích cực và sôi nổi như mùa hè. Cùng lan tỏa nguồn năng lượng thêm yêu đời này đến những người thân yêu trong dịp sinh nhật, chúc mừng,.... với bó hoa Summer Delight này nha!Bó Hoa Summer Delight bao gồm: 12 Bông Hoa Hồng Cam Spirit, Các loại Hoa và Lá khác * Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Sunny Days", 432000, 1, "H0007", "Bó hoa Sunny Days rực rỡ được tạo bởi sự kết hợp Hướng dương và Sao tím hài hòa đẹp mắt. Bó hoa là lựa chọn hoàn hảo cho ngày Valentine, ngày kỉ niệm hoặc bất kỳ dịp đặc biệt nào.Bó Hoa Sunny Days (Cơ Bản) gồm:- 06 bông Hướng Dương- Sao Tím- Các loại hoa & lá khác: Bó Hoa Sunny Days (Nâng Cấp) gồm:- 09 bông Hướng Dương- Sao Tím- Các loại hoa & lá khác* Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("La vie en rose", 529000, 1, "H0008", "Bó hoa mang gam màu pastel nhẹ nhàng đầy trang nhã và duyên dáng với sự kết hợp của hai loại hoa hồng.  Đây sẽ là món quà bất ngờ và hoàn hảo dành tặng người thương, gia đình hoặc bạn bè.Bó Hoa Hồng La Vie En Rose gồm:- 20 bông Hoa Hồng- Các loại Hoa và Lá khác* Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Cool Breeze", 359000, 2, "H0009", "Bó hoa mang màu hồng nhẹ nhàng và dễ thương, là một trong lựa chọn hoàn hảo cho những dịp đặc biệt để dành tặng cho người mình yêu thương.Bó Hoa Cool Breeze gồm:- 5 Bông Hồng kem - Các loại hoa & lá khác* Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Felicity", 399000, 2, "H0010", "Bó hoa Felicity mang màu đỏ lãng mạn và tình cảm, là một trong lựa chọn hoàn hảo cho những dịp đặc biệt để dành tặng cho người mình yêu thương.Bó Hoa Felicity  gồm:- 6 Bông Hồng Đỏ- Các loại hoa & lá khác* Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),("Mon Bel Amour", 579000, 3, "H0011","Bó Hoa Mon Bel Amour mang gam màu hồng đầy trang nhã và duyên dáng của hoa hồng với sự kết hợp của màu xanh lá tai lừa và màu tím của hoa sao. Đây sẽ là món quà bất ngờ và hoàn hảo dành tặng người thương, gia đình hoặc bạn bè.Bó Hoa Mon Bel Amour (Cơ Bản) bao gồm:- 10 Bông Hoa Hồng- Cành Tai Lừa & Các loại Hoa và Lá khácBó Hoa Mon Bel Amour (Đặc Biệt) bao gồm:- 26 Bông Hoa Hồng- Cành Tai Lừa & Các loại Hoa và Lá khácBó Hoa Mon Bel Amour (Cao Cấp) bao gồm:- 99 Bông Hoa Hồng- Cành Tai Lừa & Các loại Hoa và Lá khác* Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Nụ cười của Anh", 300000, 3, "H0012", "Bó hoa cực kỳ xinh xắn và trong trẻo được gói từ những cành hoa hồng song hỷ, hoa đồng tiền cùng điểm thêm chút tinh khôi từ hoa baby trắng chắc chắn sẽ là món quà tuyệt vời cho mọi dịp!"),
("Violet Sunny", 1000000, 2, "H0013", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Glass cylinder vase", 980000, 2, "H0014", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Nắng hạ", 450000, 2, "H0015", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Cơn mưa cuối", 610000, 2, "H0016", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Ai đưa em về", 590000, 2, "H0017", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Xin đừng nhấc máy", 600000, 2, "H0018", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Cắt đôi nỗi sầu", 430000, 2, "H0019", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Sweet child o' mine", 400000, 2, "H0020", "Bó hoa này là một sản phẩm tuyệt vời để thể hiện tình yêu và sự chân thành. Với sự kết hợp tinh tế của các loại hoa đa dạng, bó hoa này mang đến một vẻ đẹp tuyệt đỉnh. Hoa hồng tươi màu và thủy tiên tinh khiết tạo nên sự tươi mới và sự dịu dàng. Hoa lily trắng tinh khiết và hoa baby's breath nhỏ nhắn thêm vào sự tinh tế và thanh lịch. Bên cạnh đó, hoa lan tím tạo nên điểm nhấn quyến rũ. Tạo ra một dấu ấn mạnh mẽ và lưu giữ những kỷ niệm đáng nhớ. Sản phẩm này là món quà lý tưởng cho người thương của bạn."),
("Young & Dumb", 300000, 2, "H0021", "Bó hoa baby hồng khổng lồ sẽ là món quà bất ngờ và hoàn hảo dành tặng người thương, gia đình hoặc bạn bè.* Do mỗi sản phẩm đều được làm thủ công & màu hoa có thể thay đổi theo mùa hoa trong năm nên sẽ có chút khác biệt so với hình ảnh."),
("Unknow Love", 1000000 ,2 , "H0022", "Bó Hoa Lasting Love sang trọng và lộng lẫy với 99 bông hoa Hồng đỏ rực rỡ là lựa chọn hoàn hảo gửi đến người thân yêu trong ngày Valentine hoặc bất kỳ dịp đặc biệt nào."),
("Bibi Berry Premium", 300000, 2, "H0023", "Nằm trong Bộ sưu tập Chào đón Giáng Sinh, bó hoa Bibi Berry Premium mang vẻ đẹp tinh khôi và ngọt ngào, thay cho lời yêu thương của bạn đến nàng. "),
("So Pink Flower Bouquet", 500000,2 , "H0024", "Nằm trong Bộ sưu tập Chào đón Giáng Sinh, bó hoa Bibi Berry Premium mang vẻ đẹp tinh khôi và ngọt ngào, thay cho lời yêu thương của bạn đến nàng. "),
("Dried & Preserved Mini Box", 670000, 2, "H0025", "Bó hoa baby hồng khổng lồ sẽ là món quà bất ngờ và hoàn hảo dành tặng người thương, gia đình hoặc bạn bè."),
("Pastel Blue Pink Bouquet", 690000,2 , "H0026", "Bó hoa hồng đỏ lạ mắt, như là một biểu tượng của tình yêu mãnh liệt, kết hợp với lá xanh tươi mát, tạo nên một hình ảnh gần gũi và quyến rũ."),
("Cloud of Dreams", 450000, 2, "H0027", "Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt."),
("Hương mùa hè", 460000, 2, "H0028", "Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Gõ Cửa Trái Tim I Love You", 600000, 2, "H0029", "Một sự pha trộn độc đáo giữa hoa cúc hồng tươi sáng và hoa violet màu tím huyền bí, tạo nên một bó hoa thu hút và đầy sức sống. Hoa lan trắng mạnh mẽ và sang trọng, kết hợp với lá xanh mát, tạo nên một bó hoa thanh lịch và tinh tế."),
("Charming Rune", 700000, 2, "H0030", "Hoa hồng đỏ rực rỡ và hoa lily trắng tinh khôi, kết hợp với lá vàng óng ánh, tạo nên một bó hoa đẳng cấp, phù hợp cho những dịp quan trọng. Mùi thơm dịu dàng kết hợp với hoa hồng trắng, tạo nên một bó hoa giúp tạo ra không khí yên bình và tĩnh lặng."),
("Bí Mật Hoa Tình Yêu", 710000, 2, "H0030", "Những cánh hoa anh đào hồng nhẹ nhàng nở rộ, tạo nên một cảm giác như đang dạo chơi trong một khu vườn anh đào tại Nhật Bản. Hoa cẩm chướng màu đỏ lịch lãm, xen kẽ với hoa baby's breath trắng, tạo nên một bó hoa quý phái và sang trọng."),
("Biển Cả", 720000, 2, "H0032", "Bó hoa lily trắng tinh khôi, với hạt sương mỏng trên cánh hoa, tạo nên một không gian trong lành và thanh thoát. Hoa tulip màu hồng nhẹ nhàng, xen kẽ giữa hoa lavender, tạo nên bức tranh mộng mơ và tươi mới."),
("Nắng Hồng Hương", 650000, 2, "H0033", "Bó hoa hoa hướng dương tươi sáng, với màu vàng nắng, làm bừng sáng mọi không gian. Hoa cẩm chướng đỏ rực, với lá màu nâu hổ phách, tạo nên một bức tranh ấn tượng và độc đáo. Bó hoa hortensia màu xanh dương, như là một viên ngọc mát mẻ, làm dịu dàng không khí xung quanh."),
("Đóa Hoa Hạnh Phúc", 660000, 2, "H0034", "Bó hoa hoa lan trắng tinh khôi, với lá màu xanh pastel, mang đến sự quý phái và tinh tế. Bó hoa hoa cúc hồng và trắng, như một cơn gió nhẹ mùa xuân, làm tươi mới không gian xung quanh."),
("Sắc Màu", 750000, 3, "H0035", "Hoa hồng màu đỏ tươi rực, kết hợp với hoa baby's breath trắng, là biểu tượng của tình yêu mãnh liệt và trường tồn.Bó hoa hoa hướng dương và hoa cam, tạo nên sự ấm áp và năng động. Hoa lựu đỏ bừng sáng, xen kẽ với lá màu nâu hổ phách, tạo nên bức tranh ấn tượng và lôi cuốn. Bó hoa hoa lily đỏ rực, với lá màu xanh tươi mát, làm nổi bật vẻ quyến rũ và đẳng cấp."),
("Mặt Trời Tím", 750000, 3, "H0036", "Hoa violet màu tím huyền bí, kết hợp với hoa baby's breath nhẹ nhàng, làm cho không gian trở nên lãng mạn. Bó hoa hoa hướng dương và hoa lavender, tạo nên không gian dễ chịu và tràn đầy hương thơm. Hoa lily trắng và hoa baby's breath, như là một bức tranh thanh lịch và trấn an."),
("Điệu Nhảy Hạnh Phúc", 800000, 3, "H0037", "Bó hoa này là một biểu tượng của tình yêu đam mê và mãnh liệt. Hồng đậm, hồng nhạt và hồng cánh sen kết hợp tạo nên một hình ảnh tuyệt vời về sự đẹp đẽ và lãng mạn. Hoa hồng trắng, lily và hoa baby's breath được sắp xếp một cách tinh tế, tạo nên một bức tranh tinh khôi và thanh lịch cho ngày cưới."),
("Cơn Sóng Màu Tím", 540000,3 , "H0038", "Hoa dại và hoa cỏ khô kết hợp với nhau, tạo nên bó hoa độc đáo với vẻ mộc mạc, tinh tế và gần gũi với thiên nhiên. Hướng dương và hoa lavender màu tím nhẹ nhàng xen kẽ nhau, tạo nên một không gian rực rỡ, năng động như bức tranh chân dung của mùa hạ."),
("Bức Tranh Hạnh Phúc", 770000, 3, "H0039", "Hoa lan màu nhiệt đới, hoa hibiscus và lá cọ tạo nên một bó hoa đầy màu sắc và hương thơm, giống như một kỳ nghỉ trên bãi biển nhiệt đới. Hoa lily trắng tinh khôi được bố trí độc đáo, tạo nên một bức tranh tinh tế, phù hợp với mọi dịp quan trọng"),
("Điệu Nhảy", 870000, 3, "H0040", "Hoa cẩm chướng màu tím quý phái, kết hợp với hoa baby's breath trắng, tạo nên một bó hoa vô cùng quyến rũ và sang trọng. Hoa tulip màu hồng nhẹ nhàng, hoa anh đào và hoa lavender tạo nên bức tranh tươi mới và ấm áp, như là một sự chào đón cho mùa xuân. Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Hoa Hồng Vàng", 460000, 3, "H0041", "Các loại hoa khác nhau, từ hoa dại đến hoa hồng đỏ rực, được sắp xếp không đối xứng và độc đáo, tạo nên một tác phẩm nghệ thuật sống động. Hoa cúc trắng, hoa hồng hồng và hoa violet nhẹ nhàng tạo nên một bó hoa tuyệt vời làm quà tặng cho ngày lễ mẹ, mang đến cảm giác ấm áp và yêu thương."),
("Cơn Lốc Hương", 450000, 3, "H0042", "Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Đêm Huyền Bí", 430000, 3, "H0043", "Những đóa hoa hướng dương rực rỡ, mở cửa sổ cho không gian tươi sáng và ấm áp, giống như những tia nắng sớm buổi mai. Một sự pha trộn độc đáo giữa hoa cúc hồng tươi sáng và hoa violet màu tím huyền bí, tạo nên một bó hoa thu hút và đầy sức sống."),
("Bí Mật Tình Cảm", 390000, 3, "H0044", "Hoa lan trắng mạnh mẽ và sang trọng, kết hợp với lá xanh mát, tạo nên một bó hoa thanh lịch và tinh tế. Hoa hibiscus màu đỏ tươi, hoa lan độc đáo và lá cỏ khô tạo nên một bó hoa thú vị, như là một phần của thiên nhiên hòa mình trong không gian"),
("Hạt Mưa Hồng", 760000, 3, "H0045", "Hoa hồng đỏ rực rỡ và hoa lily trắng tinh khôi, kết hợp với lá vàng óng ánh, tạo nên một bó hoa đẳng cấp, phù hợp cho những dịp quan trọng. Mùi thơm dịu dàng của hoa nhài kết hợp với hoa hồng trắng, tạo nên một bó hoa giúp tạo ra không khí yên bình và tĩnh lặng."),
("Mây Trắng Tinh Kỳ", 690000, 3, "H0046", "Những cánh hoa anh đào hồng nhẹ nhàng nở rộ, tạo nên một cảm giác như đang dạo chơi trong một khu vườn anh đào tại Nhật Bản. Hoa cẩm chướng màu đỏ lịch lãm, xen kẽ với hoa baby's breath trắng, tạo nên một bó hoa quý phái và sang trọng."),
("Đại Dương Xanh", 550000, 1, "H0047", "Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Hương Thơm Thiên Nhiên", 710000,1 , "H0048", "Hoa cẩm chướng màu tím quý phái, kết hợp với hoa baby's breath trắng, tạo nên một bó hoa vô cùng quyến rũ và sang trọng. Hoa tulip màu hồng nhẹ nhàng, hoa anh đào và hoa lavender tạo nên bức tranh tươi mới và ấm áp, như là một sự chào đón cho mùa xuân. Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Mặt Trăng Lãng Mạn", 520000, 1, "H0049", "Các loại hoa khác nhau, từ hoa dại đến hoa hồng đỏ rực, được sắp xếp không đối xứng và độc đáo, tạo nên một tác phẩm nghệ thuật sống động. Hoa cúc trắng, hoa hồng hồng và hoa violet nhẹ nhàng tạo nên một bó hoa tuyệt vời làm quà tặng cho ngày lễ mẹ, mang đến cảm giác ấm áp và yêu thương."),
("Ngọc Trai Trắng", 640000, 1, "H0050", "Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Nắng Vàng Dịu Dàng", 560000,1 , "H0051", "Hoa cẩm chướng màu tím quý phái, kết hợp với hoa baby's breath trắng, tạo nên một bó hoa vô cùng quyến rũ và sang trọng. Hoa tulip màu hồng nhẹ nhàng, hoa anh đào và hoa lavender tạo nên bức tranh tươi mới và ấm áp, như là một sự chào đón cho mùa xuân. Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Vàng Tinh Kỳ", 590000, 1, "H0052", "Các loại hoa khác nhau, từ hoa dại đến hoa hồng đỏ rực, được sắp xếp không đối xứng và độc đáo, tạo nên một tác phẩm nghệ thuật sống động. Hoa cúc trắng, hoa hồng hồng và hoa violet nhẹ nhàng tạo nên một bó hoa tuyệt vời làm quà tặng cho ngày lễ mẹ, mang đến cảm giác ấm áp và yêu thương."),
("Hoa Lệ Biển Xanh", 570000, 1, "H0054", "Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực."),
("Ánh Dương Hồng", 510000, 1, "H0055", "Hoa cẩm chướng màu tím quý phái, kết hợp với hoa baby's breath trắng, tạo nên một bó hoa vô cùng quyến rũ và sang trọng. Hoa tulip màu hồng nhẹ nhàng, hoa anh đào và hoa lavender tạo nên bức tranh tươi mới và ấm áp, như là một sự chào đón cho mùa xuân. Bó hoa này gồm những bông hồng và hoa cẩm chướng màu pastel nhẹ nhàng, tạo nên một vẻ ngoài dịu dàng, lãng mạn, hoàn hảo cho những dịp lễ tình nhân hoặc kỷ niệm đặc biệt. Hoa lily trắng thuần khiết được kết hợp với những đám hoa baby's breath nhẹ nhàng, tạo nên một bức tranh thanh lịch và tràn đầy năng lượng tích cực.");


insert into users(`name`,`address`,`phone_number`, `birthday`, `username`,`password`,`email`, `role_id`)
values
("Bùi Bảo Thiện","36, Trần Nhật Duật, Thành phố Đồng Hới, Tỉnh Quảng Bình","0399758057","1991-06-04","baothien","$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "nsndbaothien@gmail.com", 2),

("admin","36, Trần Nhật Duật, Thành phố Đồng Hới, Tỉnh Quảng Bình","0399758057","1991-06-04","admin","$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "admin@gmail.com", 1),
("Hà Phi Cường","25, Đường Trần Phú, Thành phố Hải Phòng", "3222584418","1985-02-10", "cuongcuong", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "cuong@gmail.com", 2),
("Phạm Thế Quyền","15, Đường Lê Lợi, Thành phố Đà Nẵng","6199675255","1991-06-16","quyenpham", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "quyenpham@gmail.com", 2),
("Trần Linh San","30, Đường Nguyễn Huệ, Thành phố Hồ Chí Minh","4686623236","1989-08-30","santran", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "santran@gmail.com", 2),
("Ngô Vân Tiên","5, Đường Trần Hưng Đạo, Thành phố Cần Thơ, Tỉnh Cần Thơ","8203545498","1981-09-30","tienngo", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "tienngo@gmail.com", 2),

("Tôn Thất Khánh Duy","12, Đường Nguyễn Công Trứ, Thành phố Huế, Tỉnh Thừa Thiên Huế","7896543211","1993-08-07", "duyton", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "duyton@gmail.com", 2),
("Phạm Hải Nhi","8, Đường Ngô Quyền, Thành phố Hải Dương, Tỉnh Hải Dương","3618250612","1989-12-30","nhipham", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "nhi@gmail.com", 2),
("Lư Đăng Khương","20, Đường Lý Thường Kiệt, Thành phố Nha Trang, Tỉnh Khánh Hòa","3831465457","1980-09-18", "khuonglu", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "khuonglu@gmail.com", 2),
("Hoàng Thu Phượng","18, Đường Trần Nhân Tông, Thành phố Vinh, Tỉnh Nghệ An","3035355465","1986-08-07","phuonghoang", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "phuonghoang@gmail.com", 2),
("Huỳnh Phi Hải"," 22, Đường Lê Thánh Tôn, Thành phố Vũng Tàu, Tỉnh Bà Rịa-Vũng Tàu","2427482439","1987-12-17","haihuynh", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "haihuynh@gmail.com", 2),

("Phan Ðình Nguyên","3, Đường Hùng Vương, Thành phố Quy Nhơn, Tỉnh Bình Định","8129079378","1987-07-20", "nguyenpham", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "nguyenpham@gmail.com", 2),
("Phạm Khải Tâm","7, Đường Nguyễn Thái Học, Thành phố Thanh Hóa","3175618939","1990-08-24","tampham", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "tampham@gmail.com", 2),
("Đỗ Hồng Minh","14, Đường Hồ Xuân Hương, Thành phố Đà Lạt, Tỉnh Lâm Đồng","8866340294","1987-10-28", "minhdo", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "minhdo@gmail.com", 2),
("Lê Kim Xuyến","9, Đường Trần Phú, Thành phố Hội An, Tỉnh Quảng Nam","3976194594","1980-12-03", "xuyenle", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "xuyenle@gmail.com", 2),
("Nguyễn Trọng Tấn","11, Đường Lý Tự Trọng, Thành phố Cao Lãnh, Tỉnh Đồng Tháp","9596624728","1987-10-02", "tannguyen", "$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW", "tannguyen@gmail.com", 2);

insert into product_picture(`product_id`, `picture_url`)
values
(1, "https://blushpetals.ae/cdn/shop/files/PhotoRoom_20231108_175150.jpg?v=1699470861&width=900"),
(2, "https://maisonflowers.hk/cdn/shop/products/20220426_maison5863.jpg?v=1655204844&width=823"),
(3, "https://maisonflowers.hk/cdn/shop/products/20220426_maison6081.jpg?v=1655204767&width=823"),
(4, "https://maisonflowers.hk/cdn/shop/files/maison-FreshFlowerBouquet-MidsummerDream-1.jpg?v=1689518587&width=823"),
(5, "https://cdn.covet.pics/postassets/14338999/high_resolution/e9ef2d4c4f23778f07c6e6812e30dbe4"),
(6, "https://cdn.covet.pics/postassets/14329820/90537a6a2b1f31eca868073520500bec"),
(7, "https://cdn.covet.pics/postassets/14307873/high_resolution/b1e3b0c5571540595066ad222903194b"),
(8, "https://cdn.covet.pics/postassets/14249915/dfb51f4a71ccd0743b73ef6063978808"),
(9, "https://cdn.covet.pics/postassets/14080061/777a370b81f57f21253317d8dd5bdfde"),
(10, "https://maisonflowers.hk/cdn/shop/products/IMG_0532.jpg?v=1666004718&width=823"),
(11, "https://maisonflowers.hk/cdn/shop/products/maisonnew21.jpg?v=1661924973&width=823"),
(12, "https://roamstudio.co.nz/cdn/shop/files/Floristchoicebouquetxlargeinhand_06d88e95-05f3-4a17-86f5-a59d21dde137.jpg?v=1695519510"),
(13, "https://roamstudio.co.nz/cdn/shop/files/Pastelbouquetinhandlarge_b78ee975-30f9-4189-8dba-d0e1d5d52b71.jpg?v=1695519932"),
(14, "https://roamstudio.co.nz/cdn/shop/products/Floristchoicebouquetxlargeinhand.jpg?v=1693809742"),
(15, "https://roamstudio.co.nz/cdn/shop/files/flower_delivery_750x.jpg?v=1693471438"),
(16, "https://roamstudio.co.nz/cdn/shop/files/PastelbouquetwithRenee_3e26ba6e-492c-48df-8f35-bbbe95483820_750x.jpg?v=1695519932"),
(17, "https://roamstudio.co.nz/cdn/shop/products/Brightbouquetinhandamended.jpg?v=1693786105"),
(18, "https://stonehavenflowers.co.uk/885-large_default/classic-autumn-vase.jpg"),
(19, "https://stonehavenflowers.co.uk/583-large_default/ultimate-autumn-bespoke-bouquet.jpg"),
(20, "https://stonehavenflowers.co.uk/154-large_default/hand-tied-bouquet-made-with-beautiful-fresh-flowers-200.jpg"),
(21, "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/variant/600_FwHmXdb2LD3guLPPQ5jxGZbk0.jpg"),
(22, "https://www.bucketfullofroses.com/cdn/shop/products/SoPinkFlowerBouquet1_1200x.jpg?v=1632490928"),
(23, "https://www.bucketfullofroses.com/cdn/shop/products/CloudofDreams1_1200x.png?v=1612008720"),
(24, "https://www.bucketfullofroses.com/cdn/shop/products/PastelBluePink1_1200x.jpg?v=1632492486"),
(25, "https://www.bucketfullofroses.com/cdn/shop/products/image_d845ad3e-e98c-4b66-9e5b-5807a5c23baf_1200x.jpg?v=1632495193"),
(26, "https://www.bucketfullofroses.com/cdn/shop/products/image_c439cbd3-765a-4e9a-97af-04e30c9d83db_1200x.jpg?v=1632495306"),
(27, "https://www.bucketfullofroses.com/cdn/shop/products/SoPinkFlowerBouquet1_1200x.jpg?v=1632490928"),
(28, "https://www.bucketfullofroses.com/cdn/shop/products/MessengerofLove1_1200x.png?v=1612009067"),
(29, "https://www.bucketfullofroses.com/cdn/shop/products/Rouge-Bouquet-1_1200x.png?v=1599675939"),
(30, "https://www.bucketfullofroses.com/cdn/shop/products/Blanc-Bouquet-1_1200x.png?v=1599675562"),
(31, "https://www.bucketfullofroses.com/cdn/shop/products/MacchiatoFlowerBouquet1_1200x.jpg?v=1632491256"),
(32, "https://www.bucketfullofroses.com/cdn/shop/products/CongratulationsFlowerStand1_1200x.jpg?v=1632492927"),
(33, "https://www.bucketfullofroses.com/cdn/shop/products/ModArt1_1200x.png?v=1612008459"),
(34, "https://www.bucketfullofroses.com/cdn/shop/products/ClassicIvoryBouquet1_1200x.jpg?v=1632490495"),
(35, "https://favflorist.com.sg/wp-content/uploads/2022/09/Spring-Sights-Hydrangea-Rose-Bouquet-768x768.jpg"),
(36, "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
(37, "https://plus.unsplash.com/premium_photo-1668611400851-766fe4f6ac1a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
(38, "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
(39, "https://assets.flowerstore.ph/public/tenantPH/app/assets/images/variant/600_9lczAoDq5DUzlU7qLHG3whnX0.webp"),
(40, "https://assets.flowerstore.ph/public/tenantPH/app/assets/images/variant/600_ceo9PUzhsPPsvg4YxujhVg2nQ.webp"),
(41, "https://assets.flowerstore.ph/public/tenantPH/app/assets/images/variant/600_A7jHWrCIpmdjuZKS1v2ehOHYB.webp"),
(42, "https://assets.flowerstore.ph/public/tenantPH/app/assets/images/variant/600_0z1I9AN55pw2yc6qwb7QkAf4y.webp"),
(43, "https://maisonflowers.hk/cdn/shop/products/maisonnew10.jpg?v=1658680196"),
(44, "https://maisonflowers.hk/cdn/shop/products/20220426_maison5789.jpg?v=1655204809&width=823"),
(45, "https://maisonflowers.hk/cdn/shop/products/20220426_maison6064.jpg?v=1651156776&width=823"),
(46, "https://imagedelivery.net/3aWclJA3XiJCb-KKeyLo9Q/808b0f74-efff-4450-d0e6-d10d4a866000/large"),
(47, "https://images.squarespace-cdn.com/content/v1/58ad143059cc68c14b809e68/1662772410891-87TM05CR7E6OZSMSZFCG/pastel-wrapped-bouquet.jpg?format=2500w"),
(48, "https://images.squarespace-cdn.com/content/v1/58ad143059cc68c14b809e68/1656999589861-ZVFLA6PSDDNI9Y9IGAPQ/Grandeur+PastelBlanc+in+Vase.JPG?format=2500w"),
(49, "https://images.squarespace-cdn.com/content/v1/58ad143059cc68c14b809e68/1599209034771-BOJAJM9EJ1QB51LTH5TR/Seasonal05.jpg?format=1500w"),
(50, "https://pushponirbd.com/storage/uploads/600_600x600.png"),
(51, "https://media.karousell.com/media/photos/products/2021/8/19/proposal_flower_bouquet_1629342157_304bf7d6_progressive.jpg"),
(52, "https://media.karousell.com/media/photos/products/2023/12/7/preserve_and_dried_flower_bouq_1701914568_90d3e678_progressive.jpg"),
(53, "https://blissbouquets.com.sg/cdn/shop/products/Screenshot_20210506-220401_WhatsApp_360x.jpg?v=1620369486"),
(54, "https://blissbouquets.com.sg/cdn/shop/products/Screenshot_20220103-120639_Gallery_1024x1024@2x.jpg?v=1641195857");


insert into carts (`user_id`,`product_id`, quantity)
values
(1, 1, 15),
(1, 2, 21),
(1, 3, 5),
(2, 4, 5),
(2, 3, 5),
(3, 5, 5),
(3, 2, 5),
(4, 2, 5),
(5, 3, 5),
(6, 3, 5),
(7, 2, 2),
(8, 3, 7),
(9, 3, 15),
(9, 4, 23);

insert into orders(`user_id`, `time`, `message`, `order_code`)
values
(1, '2023-12-07 14:30:00', "Giao hàng cho mình sau 1h đêm nhé, many thank <3", "DSOD-00021"),
(1, '2023-12-07 15:45:00', "Giao hàng cho mình sau 1h đêm nhé, many thank <3", "DSOD-00301"),
(1, '2023-12-07 12:15:00', "Giao hàng cho mình sau 1h đêm nhé, many thank <3", "DSOD-00401"),
(1, '2023-12-07 11:45:00', "Giao hàng cho mình sau 1h đêm nhé, many thank <3", "DSOD-00501"),
(2, '2023-12-07 07:40:00', "Đây là lời nhắn trong quá trình test", "DSOD-00201"),
(2, '2023-12-07 15:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-002101"),
(2, '2023-12-07 15:25:00', "Đây là lời nhắn trong quá trình test", "DSOD-00012"),
(2, '2023-12-07 15:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-00015"),
(3, '2023-12-07 15:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-00016"),
(3, '2023-12-07 05:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-00071"),
(3, '2023-12-07 10:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-00081"),
(4, '2023-12-07 07:25:00', "Đây là lời nhắn trong quá trình test", "DSOD-00019"),
(4, '2023-12-07 09:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-000122"),
(5, '2023-12-07 15:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-000112"),
(6, '2023-12-07 15:45:00', "Đây là lời nhắn trong quá trình test", "DSOD-002101"),
(6, '2023-12-07 16:20:00', "Đây là lời nhắn trong quá trình test", "DSOD-006601");

insert into order_detail (`order_id`, `product_id`, quantity, total_cost)
values
(1, 1, 10, 3000000),
(1, 2, 5, 2160000),
(1, 3, 10, 3990000),
(1, 4, 10, 3990000),
(1, 5, 10, 4290000),
(1, 6, 10, 3290000),
(2, 3, 5, 2345000),
(3, 1, 10, 3000000),
(3, 1, 10, 3000000),
(4, 1, 10, 3000000),
(5, 1, 10, 3000000),
(6, 1, 10, 3000000),
(7, 1, 10, 3000000),
(8, 1, 10, 3000000),
(9, 1, 10, 3000000),
(10, 1, 10, 3000000),
(11, 1, 10, 3000000),
(12, 1, 10, 3000000),
(13, 1, 10, 3000000),
(14, 1, 10, 3000000);



