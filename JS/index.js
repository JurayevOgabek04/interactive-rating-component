let ratingValue;

const elRatingComponentForm = document.querySelector("#rating-component__form")
const elRatingComponentResult = document.querySelector(".rating-component__result-value")
const elRatingComponentStep = document.querySelector(".rating-component__step")


elRatingComponentForm.addEventListener("submit", evt => {
    evt.preventDefault()

    const ratingFormData = new FormData(elRatingComponentForm)

    ratingValue = parseInt(ratingFormData.get('rating', 10))

    elRatingComponentResult.textContent = ratingValue

    elRatingComponentStep.classList.remove('rating-component__step--active')

    elRatingComponentStep.nextElementSibling.classList.add("rating-component__step--active")

})


