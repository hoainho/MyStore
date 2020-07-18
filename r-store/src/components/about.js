import '../../../sass/page/about.scss';

function About(){
    return(
<div class="page-wrapper">
         <!-- BANNER -->
        <div class="banner"></div>
         <!-- NAVBAR -->
        <div class="navbar" id="navbar">
            <div class="navbar-content">
                <div class="navbar-content--top">
                    <div class="navbar-content--top_features">
                            <div class="row navbar-content--top_features__row">
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-content--top_features__row___left">
                                    <div class="navbar-content--top_features__row___left-content"> Chuyển phát nhanh và hoàn trả miễn phí trong vòng 30 ngày</div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-content--top_features__row___right">
                                    <div class="navbar-content--top_features__row___right-content">
                                        <div class="dropdown navbar-content--top_features__row___right-content--language" >
                                            <div id="dropdownMenuButton" class="dropdown-toggle navbar-content--top_features__row___right-content--language_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ngôn ngữ</div>
                                            <ul  class="dropdown-menu navbar-content--top_features__row___right-content--language_list" aria-labelledby="dropdownMenuButton">
                                                <li class="dropdown-item navbar-content--top_features__row___right-content--language_link"> <a class="dropdown-item navbar-content--top_features__row___right-content--language_item" href="#"><strong>ENG</strong></a></li>
                                                <li class="dropdown-item navbar-content--top_features__row___right-content--language_link"> <a class="dropdown-item navbar-content--top_features__row___right-content--language_item" href="#"><strong>VN</strong></a></li>
                                            </ul>
                                        </div>
                                        <div class="navbar-content--top_features__row___right-content--info">
                                            <ul class="navbar-content--top_features__row___right-content--info_list">
                                                <li class="navbar-content--top_features__row___right-content--info_item">
                                                    <a href="./account.html" class="navbar-content--top_features__row___right-content--info_link">
                                                        Tài khoản
                                                    </a>
                                                </li>
                                                <li class="navbar-content--top_features__row___right-content--info_item">
                                                    <a href="#" class="navbar-content--top_features__row___right-content--info_link">
                                                        Danh sách yêu thích
                                                    </a>
                                                </li>
                                                <li class="navbar-content--top_features__row___right-content--info_item">
                                                    <a href="#" class="navbar-content--top_features__row___right-content--info_link">
                                                        So Sánh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-content--header">
                        <div class="navbar-content--header_main">
                            <div class="row navbar-content--header_main__features">
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 row navbar-content--header_main__features___logo">
                                    <div class="logo navbar-content--header_main__features___logo-box">
                                        <span class="logo-letter navbar-content--header_main__features___logo-box--logo" data-letter="ℜ">ℜ</span>
                                        <span class="navbar-content--header_main__features___logo-box--sublogo">Store</span>
                                    </div>
                                </div>
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 row navbar-content--header_main__features___control">
                                    <div class="navbar-content--header_main__features___control-search">
                                        <form action="" method="get" id="mini-search" class="navbar-content--header_main__features___control-search--box">
                                                
                                                <div class="navbar-content--header_main__features___control-search--box_select" id="select-box">
                                                        <input type="checkbox" id="options-view-button"/>
                                                        <div id="select-button" class="brd">
                                                                <div id="selected-value">
                                                                    <span>Tất Cả</span>
                                                                </div>
                                                                <div id="chevrons">
                                                                        <i class="fas fa-chevron-up"></i>
                                                                        <i class="fas fa-chevron-down"></i>
                                                                </div>
                                                        </div>
                                                        <div id="options" >
                                                                <div class="option">
                                                                        <input class="s-c top" type="radio" name="platform" value="codepen"/>
                                                                        <input class="s-c bottom" type="radio" name="platform" value="codepen"/>
                                                                        <i class="fas fa-laptop-house option-icon"></i>
                                                                        <span class="label">Tất Cả</span>
                                                                        <span class="opt-val">Tất Cả</span>
                                                                </div>
                                                                <div class="option">
                                                                        <input class="s-c top" type="radio" name="platform" value="dribbble"/>
                                                                        <input class="s-c bottom" type="radio" name="platform" value="dribbble"/>
                                                                        <i class="fas fa-laptop option-icon"></i>
                                                                        <span class="label">Acer</span>
                                                                        <span class="opt-val">Acer</span>
                                                                </div>
                                                                <div class="option">
                                                                        <input class="s-c top" type="radio" name="platform" value="behance"/>
                                                                        <input class="s-c bottom" type="radio" name="platform" value="behance"/>
                                                                        <i class="fas fa-laptop-medical option-icon"></i>
                                                                        <span class="label">Asus</span>
                                                                        <span class="opt-val">Asus</span>
                                                                </div>
                                                                <div class="option">
                                                                        <input class="s-c top" type="radio" name="platform" value="hackerrank"/>
                                                                        <input class="s-c bottom" type="radio" name="platform" value="hackerrank"/>
                                                                        <i class="fas fa-laptop-code option-icon"></i>
                                                                        <span class="label">Dell</span>
                                                                        <span class="opt-val">Dell</span>
                                                                </div>
                                                                <div class="option">
                                                                        <input class="s-c top" type="radio" name="platform" value="stackoverflow"/>
                                                                        <input class="s-c bottom" type="radio" name="platform" value="stackoverflow"/>
                                                                        <i class="fab fa-apple option-icon"></i>
                                                                        <span class="label">Apple</span>
                                                                        <span class="opt-val">Apple</span>
                                                                </div>
                                                                <div class="option">
                                                                        <input class="s-c top" type="radio" name="platform" value="freecodecamp"/>
                                                                        <input class="s-c bottom" type="radio" name="platform" value="freecodecamp"/>
                                                                        <i class="fas fa-mouse option-icon"></i>
                                                                        <span class="label">Logitech</span>
                                                                        <span class="opt-val">Logitech</span>
                                                                </div>
                                                                <div id="option-bg"></div>
                                                        </div>
                                                </div>
                                            <div class="navbar-content--header_main__features___control-search--box_input">
                                                <input id="search" 
                                                type="text" 
                                                name="q" 
                                                value="" 
                                                placeholder="Tai nghe, bàn phím, chuột gaming, chuột văn phòng,..." 
                                                class="input-text navbar-content--header_main__features___control-search--box_input__enter" 
                                                maxlength="128" 
                                                role="combobox" 
                                                aria-haspopup="false" 
                                                aria-autocomplete="both" 
                                                aria-expanded="false" 
                                                autocomplete="off"/>
                                            </div>
                                            <div class="navbar-content--header_main__features___control-search--box_button">
                                                <button class="navbar-content--header_main__features___control-search--box_button__search">Tìm kiếm</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div  class="navbar-content--header_main__features___control-cart">
                                        <div data-toggle="modal" data-target="#exampleModalScrollable" class="navbar-content--header_main__features___control-cart--icon ">
                                            <i class="fas fa-cart-plus navbar-content--header_main__features___control-cart--icon_details"></i>
                                            <span class="navbar-content--header_main__features___control-cart--icon_numbers">
                                                1
                                            </span>
                                        </div>
                                        <span class="navbar-content--header_main__features___control-cart--name">
                                            <span class="navbar-content--header_main__features___control-cart--name_details">
                                                Giỏ hàng:
                                            </span>
                                            <span class="navbar-content--header_main__features___control-cart--name_total">
                                                0.000VND
                                            </span>
                                        </span>
  
                                        {/* <!-- Modal --> */}
                                        <div class="modal fade navbar-content--header_main__features___control-cart--storage" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" >
                                            <div class="modal-dialog modal-dialog-scrollable" role="document">
                                            <div class="modal-content navbar-content--header_main__features___control-cart--storage_container">
                                                <div class="modal-header navbar-content--header_main__features___control-cart--storage_container__header">
                                                    <div class="navbar-content--header_main__features___control-cart--storage_container__header-box">
                                                        <h5 class="modal-title navbar-content--header_main__features___control-cart--storage_container__header-box--details" id="exampleModalScrollableTitle ">Giỏ Hàng</h5>
                                                        <span class="navbar-content--header_main__features___control-cart--storage_container__header-box--numbers">(1 sản phẩm )</span>
                                                    </div>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body navbar-content--header_main__features___control-cart--storage_container__content">
                                                    <div class="navbar-content--header_main__features___control-cart--storage_container__content-box">
                                                        <div class="navbar-content--header_main__features___control-cart--storage_container__content-box--pic">
                                                            <img src="img/mouse2A.png" alt="" class="navbar-content--header_main__features___control-cart--storage_container__content-box--pic_details"/>
                                                        </div>
                                                        <div class="navbar-content--header_main__features___control-cart--storage_container__content-box--description">
                                                            <h6 class="navbar-content--header_main__features___control-cart--storage_container__content-box--description_name">
                                                                Axtrix 2.0
                                                            </h6>
                                                            <span class="navbar-content--header_main__features___control-cart--storage_container__content-box--description_price">
                                                                $1.800.000VND
                                                            </span>
                                                            <span class="navbar-content--header_main__features___control-cart--storage_container__content-box--description_numbers">
                                                                SL : <span class="navbar-content--header_main__features___control-cart--storage_container__content-box--description_numbers__details ">1</span>
                                                            </span>
                                                        </div>
                                                        <div class="navbar-content--header_main__features___control-cart--storage_container__content-box--control">
                                                            <span class="navbar-content--header_main__features___control-cart--storage_container__content-box--control_setting">
                                                                <i class="fas fa-cog avbar-content--header_main__features___control-cart--storage_container__content-box--control_setting__details"></i>
                                                            </span>
                                                            <span class="navbar-content--header_main__features___control-cart--storage_container__content-box--control_delete">
                                                                <i class="far fa-trash-alt avbar-content--header_main__features___control-cart--storage_container__content-box--control_delete__details"></i>
                                                            </span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer navbar-content--header_main__features___control-cart--storage_container__control">
                                                    <div class="navbar-content--header_main__features___control-cart--storage_container__control-price">
                                                        <h5 class="navbar-content--header_main__features___control-cart--storage_container__control-price--tittle">
                                                            Total :
                                                        </h5>
                                                        <span class="navbar-content--header_main__features___control-cart--storage_container__control-price--value">
                                                            $1.800.000VND
                                                        </span>
                                                    </div>
                                                    <button class="product-tab--container_content__category___product-button--card left-0 mb-2">Thanh Toán</button>
                                                    <button class="product-tab--container_content__category___product-button--card bg-divider left-0 "> Chỉnh sửa</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="navbar-content--menu">
                        <div class="row navbar-content--menu__container">
                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 navbar-content--menu_menutoggle">
                                    <div class="navbar-content--menu_menutoggle__container">
                                        <h4 id="btnmenutoggle" class="navbar-content--menu_menutoggle__container-button">Nổi Bật <i class="navbar-content--menu_menutoggle__container-button--icon far fa-list-alt"></i></h4>
                                        
                                        <input type="checkbox" class="navbar-content--menu_menutoggle__container-checkbox"/>

                                        <ul id="menutoggle" class="navbar-content--menu_menutoggle__container___list">
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Top 10</a> </li>
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Sản phẩm bán chạy</a> </li>
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Điện Thoại</a> </li>
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Máy Tính</a> </li>
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Chuột</a> </li>
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Bàn Phím</a> </li>
                                            <li class="navbar-content--menu_menutoggle__container___item"><a class="navbar-content--menu_menutoggle__container___link" href="#">Phụ Kiện Khác</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-content--menu_menuNavbar">
                                    <div class="navbar-content--menu_menuNavbar__sticky ">
                                        <ul class="navbar-content--menu_menuNavbar__sticky___list nav nav-tabs " id="myTab" role="tablist">
                                            <li class="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                <a class="navbar-content--menu_menuNavbar__sticky___link nav-link active" id="home-tab" data-toggle="tab" href="./index.html" role="tab" aria-controls="home" aria-selected="true"> Trang Chủ</a>
                                            </li>
                                            <li class="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                <a class="navbar-content--menu_menuNavbar__sticky___link nav-link"        id="store-tab" data-toggle="tab" href="./store.html" role="tab" aria-controls="store" aria-selected="false"> Cửa Hàng</a> 
                                            </li>
                                            <li class="navbar-content--menu_menuNavbar__sticky___item navbar-content--menu_menuNavbar__sticky___itemFeatures nav-item">
                                                <a class="navbar-content--menu_menuNavbar__sticky___link nav-link"        id="featured-tab" data-toggle="tab" href="#" role="tab" aria-controls="featured" aria-selected="false"> Chức Năng</a> 
                                                <ul class="navbar-content--menu_menuNavbar__sticky___item-features">
                                                    <li class="navbar-content--menu_menuNavbar__sticky___item-features--item"><a class="navbar-content--menu_menuNavbar__sticky___item-features--link" href="#">Loại</a>
                                                        <ul class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype">
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                <a href="" class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                    Sản Phẩm Cấu Hình
                                                                </a>
                                                            </li>
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                <a href="" class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                    Sản Phẩm Combo
                                                                </a>
                                                            </li>
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                <a href="" class="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                    Phần mềm
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="navbar-content--menu_menuNavbar__sticky___item-features--item"><a class="navbar-content--menu_menuNavbar__sticky___item-features--link" href="#">Sắp Xếp</a>
                                                        <ul class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct">
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                <a class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" href="#"> Đánh giá </a>
                                                            </li>
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                <a class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" href="#"> Lượt mua </a>
                                                            </li>
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                <a class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" href="#"> Giảm giá </a>
                                                            </li>
                                                            <li class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                <a class="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" href="#"> Miễn Phí giao hàng </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="navbar-content--menu_menuNavbar__sticky___item-features--item"><a class="navbar-content--menu_menuNavbar__sticky___item-features--link" href="#">Thương Hiệu </a></li>

                                                </ul>
                                            </li>
                                            <li class="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                <a class="navbar-content--menu_menuNavbar__sticky___link nav-link"        id="news-tab" data-toggle="tab" href="./news.html" role="tab" aria-controls="news" aria-selected="false"> Tin Tức</a> 
                                            </li>
                                            <li class="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                <a class="navbar-content--menu_menuNavbar__sticky___link nav-link"        id="guarantee-tab" data-toggle="tab" href="#" role="tab" aria-controls="guarantee" aria-selected="false"> Thông tin</a> 
                                            </li>
                                            <li class="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                <a class="navbar-content--menu_menuNavbar__sticky___link nav-link"        id="contact-tab" data-toggle="tab" href="/contact.html" role="tab" aria-controls="contact" aria-selected="false"> Liên Hệ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 navbar-content--menu_contact">
                                   <div class="navbar-content--menu_contact__container">
                                       <span class="navbar-content--menu_contact__container-icon"><i class="fas fa-phone-volume"></i></span>
                                       <span class="navbar-content--menu_contact__container-content">(+84) 912 521 560 - (+84) 9 0115 0222</span>
                                   </div>
                                </div>
                        </div>
                        
                    </div>
                </div>

        </div>

        </div>
        {/* <!-- **********ABOUT********** -->
                <!-- TITTLE --> */}
                <div class="store-tittle news-tittle">
                    <div class="store-tittle--container">
                        <a href="#home" class="store-tittle--container_home">Trang chủ</a>
                        <span class="store-tittle--container_iconpresent special">
                            > 
                        </span>
                        <span class="store-tittle--container_present special">
                             Thông tin
                        </span>
                    </div>
                </div>
                {/* <!-- OUR-STORY --> */}
                <div class="about">
                    <div class="row about-story">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 about-story--pic">
                            <img src="/img/MyBg.png" alt="" class="about-story--pic_details"/>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 about-story--content">
                            <h3 class="about-story--content_tittle">
                                Tiểu sử     
                            </h3>
                            <p class="about-story--content_details">
                                "Lorem Khaled Ipsum is a major key to success.
                                 They don’t want us to win. Always remember in the 
                                 jungle there’s a lot of they in there, after you 
                                 overcome they, you will make it to paradise. 
                                 Major key, don’t fall for the trap, stay focused.
                                It’s the ones closest to you that want to see you fail. 
                                Major key, don’t fall for the trap, stay focused. 
                                It’s the ones closest to you that want to see you fail. 
                                You see the hedges, how I got it shaped up? 
                                It’s important to shape up your hedges, 
                                it’s like getting a haircut, stay fresh."
                            </p>
                        </div>
                        
                        
                    </div>
                    <div class="about-service"> 
                        <div class="about-service--content">
                            <h3 class="about-service--content_tittle">
                                Dịch vụ
                            </h3>
                            <p class="about-service--content_details">
                                "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica"

                            </p>
                        </div>
                        <div class="row about-service--container">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 about-service--container_box">
                                <div class="about-service--container_box__main">
                                    <span class="special about-service--container_box__ordinal">
                                        01.
                                    </span>
                                    <span class="about-service--container_box__slogan">
                                        Sell Technology
                                    </span>
                                    <p class="about-service--container_box__content">
                                        Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple
                                    </p>
                                </div>
                                
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 about-service--container_box">
                                <div class="about-service--container_box__main">
                                    <span class="special about-service--container_box__ordinal">
                                        02.
                                    </span>
                                    <span class="about-service--container_box__slogan">
                                        Guarantee service Technology
                                    </span>
                                    <p class="about-service--container_box__content">
                                        Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 about-service--container_box">
                                <div class="about-service--container_box__main">
                                    <span class="special about-service--container_box__ordinal ">
                                        03.
                                    </span>
                                    <span class="about-service--container_box__slogan">
                                        Worldwide Delivery
                                    </span>
                                    <p class="about-service--container_box__content">
                                        Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-slogan">
                        <div class="about-slogan--container">
                            <span class="about-slogan--container_symbos big-size">
                                "
                            </span>
                            <p class="about-slogan--container_content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque debitis eveniet sapiente. Necessitatibus expedita quos ex error voluptate, voluptatem nisi autem quis voluptatum voluptas, repellendus suscipit quibusdam ipsa minima.
                            </p>
                        </div>
                    </div>
                    <div class="about-team">
                        <div class="about-team--header">
                            <h3 class="about-team--header_tittle">Thành Viên</h3>
                            <p class="about-team--header_content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi impedit reprehenderit quia expedita omnis tempora sunt. Nobis cum, accusamus ut voluptates libero voluptatum deleniti atque amet, facere in autem!</p>
                        </div>
                        <div class="about-team--container">
                            <div class="row about-team--container_main">
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic"/>
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic"/>
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic"/>
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic"/>
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- TRADEMARK  --> */}
                <div class="trademark">
                    <div class="trademark-container">
                        <div class="trademark-container--slider ">
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/AcerLogo1A.png" alt="local"/>
                                </div> 
                            </div>
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/AsusLogo1A.png" alt="local"/>
                                </div> 
                            </div>
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/intellogo.svg" alt="local"/>
                                </div> 
                            </div>
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/LenovoLogo1A.png" alt="local"/>
                                </div> 
                            </div>
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/samsunglogo.svg" alt="local"/>
                                </div> 
                            </div>
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/SonyLogo1B.png" alt="local"/>
                                </div> 
                            </div>
                            <div class="trademark-container--slider_box">
                                <div class="trademark-container--slider_box__icon">
                                    <img class="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/Logotech1A.svg" alt="local"/>
                                </div> 
                            </div>
                            
                            

                        
                        </div>
                </div>

            
                
                
                
                </div>
                {/* <!-- FOOTER  --> */}
                <div class="footer-overlay">
                    <svg viewBox="0 0 120 28">
                    <defs> 
                        <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
                            1 0 0 0 0  
                            0 1 0 0 0  
                            0 0 1 0 0  
                            0 0 0 13 -9" result="goo" />
                        </filter>
                        <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                    </defs> 
                    
                    <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" />
                    <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" />
                    
                    
                    <g class="gooeff" filter="url(#goo)">
                    <circle class="drop drop1" cx="20" cy="2" r="8.8"  />
                    <circle class="drop drop2" cx="25" cy="2.5" r="7.5"  />
                    <circle class="drop drop3" cx="16" cy="2.8" r="9.2"  />
                    <circle class="drop drop4" cx="18" cy="2" r="8.8"  />
                    <circle class="drop drop5" cx="22" cy="2.5" r="7.5"  />
                    <circle class="drop drop6" cx="26" cy="2.8" r="9.2"  />
                    <circle class="drop drop1" cx="5" cy="4.4" r="8.8"  />
                    <circle class="drop drop2" cx="5" cy="4.1" r="7.5"  />
                    <circle class="drop drop3" cx="8" cy="3.8" r="9.2"  />
                    <circle class="drop drop4" cx="3" cy="4.4" r="8.8"  />
                    <circle class="drop drop5" cx="7" cy="4.1" r="7.5"  />
                    <circle class="drop drop6" cx="10" cy="4.3" r="9.2"  />
                    
                    <circle class="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
                    <circle class="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
                    <circle class="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
                        <circle class="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
                    <circle class="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
                    <circle class="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
                    <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
                    </g>  
                        <!-- g mask="url(#xxx)">
                        <path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                        </g>
                    </g -->
                    
                    </svg>
                    <div class="footer">
                        <div class="row footer-container">
                            
                            
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footer-left">
                                <div class="footer-left--logo">
                                    <div class="logo navbar-content--header_main__features___logo-box footer-left--logo_box">
                                        <span class="logo-letter navbar-content--header_main__features___logo-box--logo footer-left--logo_box__icon" data-letter="ℜ">ℜ</span>
                                        <span class="navbar-content--header_main__features___logo-box--sublogo footer-left--logo_box__name">Store</span>
                                    </div>
                                </div>
                                <div class="footer-left--rock">
                                    <img class="footer-left--rock_pic" src="img/footer-rock.png" alt="rock"/>
                                </div>
                                
                            </div>
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 footer-center">
                                <div class="footer-center--content">
                                    <div class="footer-center--content-rowfirst">
                                        <div class="footer-center--content-box">
                                            <h4 class="footer-center--content_tittle">Phương thức thanh toán</h4>
                                            <ul class="footer-center--content_list">
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Visa</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Ship Cod</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Ví momo</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Chuyển khoản</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="footer-center--content-box">
                                            <h4 class="footer-center--content_tittle">Chính sách bảo hành</h4>
                                            <ul class="footer-center--content_list">
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Hoàn tiền trong 30 ngày</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Bảo hành R-Vip</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Bảo hành phần mềm 1 năm</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Chính sách 1 đổi 1</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="footer-center--content-rowsecond">
                                        <div class="footer-center--content-box">
                                            <h4 class="footer-center--content_tittle">Vì sao chọn chúng tôi</h4>
                                            <ul class="footer-center--content_list">
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">An toàn</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Tiện lợi</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Chất lượng cao</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Giá rẻrẻ</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="footer-center--content-box">
                                            <h4 class="footer-center--content_tittle">Thông tin R-Store</h4>
                                            <ul class="footer-center--content_list">
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Giấy phép kinh doanh</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Feedback</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Nguồn gốc sản phẩm</a>
                                                </li>
                                                <li class="footer-center--content_item">
                                                    <a href="#" class="footer-center--content_link">Thành viên</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 footer-right">
                                <div class="footer-right--contact">
                                    <h4 class="footer-right--contact_tittle">
                                        Đăng nhập & Theo dõi
                                    </h4>
                                    <span class="footer-right--contact_sub">
                                        100+ mã khuyến mãi mỗi tuần khi bạn theo dõi R-Store <br>
                                        Nhập email bạn muốn nhận mã (1 email/1 mã)
                                    </span>
                                    <form class="footer-right--contact_follow" action="" method="post">
                                        <input class="footer-right--contact_follow__input"
                                        type="email" 
                                        maxlength="128" 
                                        placeholder="Nhập email của bạn..."
                                        name="email"  
                                        pattern="\S+.*"/>
                            
                                        <button class="footer-right--contact_follow__button" type="submit">Theo dõi</button>
                                    </form>
                                    <div class="footer-right--contact_hotline">
                                        <span class="footer-right--contact_hotline__icon"><img src="img/icon-call.png" alt="icon" class="footer-right--contact_hotline__icon___details"/></span>
                                        <span class="footer-right--contact_hotline__name">(+84) 912 521 560</span>
                                        <span class="footer-right--contact_hotline__address"><br>
                                            Địa chỉ : N3, Điện Biên Phủ, P.25, Q.Bình Thạnh <br>
                                            Email: remalw2019@gmail.com <br>
                                            Thông tin:  <a href="https://hoainho.github.io/Rem-Cv/" class="high-light"> Rem-Cv </a> 
                                        </span>
                                    </div>
                                    <div class="footer-right--contact_payment">
                                        <span class="footer-right--contact_payment__box"><img class="footer-right--contact_payment__box___icon" src="img/visa.png" alt="payonline"/></span>
                                        <span class="footer-right--contact_payment__box"><img class="footer-right--contact_payment__box___icon" src="img/MTcard.png" alt="payonline"/></span>
                                        <span class="footer-right--contact_payment__box"><img class="footer-right--contact_payment__box___icon" src="img/momo.png" alt="payonline"/></span>
                                        <span class="footer-right--contact_payment__box"><img class="footer-right--contact_payment__box___icon" src="img/airpay.png" alt="payonline"/></span>
                                    </div>
                                    <span class="footer-right--contact_copyright">Copyright © <a class="high-light" href="#"> R-Store </a>All Rights Reserved. <a class="high-light"  href="#"> Remalw</a> </span>
                                </div>
                            </div>
                            
                            
                            
                            
                                
                                
                        </div>
                    </div>
                </div>
                <div id="stop" class="scrollTop">
                    <span class="scrollTop-box"><a class="scrollTop-box--link" href="">Top</a></span>
                </div>
         


    </div>
    );
}