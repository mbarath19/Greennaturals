document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <div class="container-fluid footer py-5">
        <div class="container py-5">
            <div class="row g-5">
                <!-- Our Services Column -->
                <div class="col-md-6 col-lg-3 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Our Services</h4>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Facials</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Waxing</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> PeelOff</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> SkinCare</a>
                    </div>
                </div>

                <!-- Follow Us Column -->
                <div class="col-md-6 col-lg-3 col-xl-2 demo1">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Follow Us</h4>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Facebook</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Instagram</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Twitter</a>
                    </div>
                </div>

                <!-- Address Column -->
                <div class="col-md-6 col-lg-3 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Address</h4>
                        <p class="mb-0"><i class="fas fa-map-marker-alt text-secondary me-2"></i> 31, Rajendra Singh Street, Chunambupet, Gudiyatham, Tamilnadu.</p>
                    </div>
                </div>

                <!-- Contact Us Column -->
                <div class="col-md-6 col-lg-3 col-xl-3 demo">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Contact Us</h4>
                        <p class="mb-0 d-flex align-items-center"><i class="fas fa-envelope text-secondary me-2"></i> greennaturals023@gmail.com</p>
                        <p class="mb-0 d-flex align-items-center"><i class="fas fa-phone text-secondary me-2"></i> +91 81483 18335</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-md-4 text-center text-md-start mb-md-0">
                    <span class="text-light"><a href="#"><i class="fas fa-copyright text-light me-2"></i></a> All rights reserved.</span>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center">
                        <a href="https://www.facebook.com/profile.php?id=61566348382697" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://x.com/GreenNatur94232" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/greennaturals.gym?igsh=MTJ6ZHlvNTBoeDJldg==" class="btn btn-light btn-light-outline-0 btn-sm-square rounded-circle me-2"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-md-4 text-center text-md-end text-white">
                    Designed By <a class="border-bottom" href="https://corpwings.in">Corpwings</a>
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById('footer-container').innerHTML = footerHTML;
});
