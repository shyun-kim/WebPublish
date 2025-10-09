/**
 * 장바구니 아이템 수량 업데이트
 */
export function updateCartItemsQty(cartItems, cid, type) {
    return cartItems.map((item) => 
                item.cid === cid ?
                    type === '+' ? {...item, qty: item.qty-1} : item
                : item);
}

/**
 * 상품 총 금액 구하기
 */
export function getTotalPrice(products, items) {

}

/**
 * 상품 리스트에서 이미지, 상품명, 가격 --> 장바구니 리스트에 추가
 */
export function cartItemsAddInfo(products, items) {

}