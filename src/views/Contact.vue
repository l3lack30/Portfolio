<template>
    <div class="t container px-4 py-4 my-4" id="Contact">
        <h2 class="pb-3 mb-4 border-bottom fw-bold">Contact Me</h2>
        <div class="section">
            <p><i class="bi bi-geo-alt-fill m-2" style="font-size: 25px;"></i> Chiang Mai, TH</p>
            <p><i class="bi bi-telephone-fill m-2" style="font-size: 25px;"></i> Phone: 063-787-5743</p>
            <p><i class="bi bi-envelope-fill m-2" style="font-size: 25px;"></i> Email: l3lack30@gmail.com</p>
        </div>
        <div class="row g-5 py-3 row-cols-1 row-cols-lg-2">
            <form action="https://formsubmit.co/l3lack30@gmail.com" method="POST">
                <div class="mb-3">
                    <input type="text" placeholder="Full Name" name="Name" class="form-control" id="Name">
                </div>
                <div class="mb-3">
                    <input type="email" placeholder="Email" name="Email" class="form-control" id="" required>
                </div>
                <div class="mb-3">
                    <textarea id="comments" class="form-control" name="Comments" placeholder="Comment" cols="80" rows="4"
                        required></textarea>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    </div>
</template>

<style> .t {
     font-family: 'Kanit', sans-serif;
 }
</style>