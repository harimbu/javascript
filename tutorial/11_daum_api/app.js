// key - 690d2d6fc7114cf6b223af8e7ab60f4f
// https://dapi.kakao.com/v3/search/book?target=title
// query=미움받을 용기
// Authorization: KakaoAK ${REST_API_KEY}

const input = document.querySelector('form input')
const btn = document.getElementById('btn')
const bookContainer = document.querySelector('.book_container')

function getBooks() {
    $.ajax(
        {
            method: 'GET',
            url : 'https://dapi.kakao.com/v3/search/book',
            data: {
                query: '안녕', 
                size: 20
            },
            headers : {
                Authorization: 'KakaoAK 690d2d6fc7114cf6b223af8e7ab60f4f'
            }
        }
    )
}

getBooks()