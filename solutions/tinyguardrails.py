import unicodedata
from rapidfuzz import fuzz

threshold = 80

def to_lower_case(text):
    text = text.lower()
    text = ''.join(c for c in unicodedata.normalize('NFD', text) if unicodedata.category(c) != 'Mn')
    return text

def classify_message(message):
    clean_text = to_lower_case(message)

    small_talk_keywords = [
        "xin chao", "hom nay", "khoe khong", "the nao", "cam thay", "noi chuyen", "vui ve", "tro chuyen",
        "toi ten la", "ten toi la", "toi o dau", "ban o dau", "co met khong", "ban nghi sao", "anh nghi sao",
        "cam on", "xin loi", "toi buon", "toi vui", "troi dep", "troi mua", "co bi khong", "co that khong",
        "co dung khong", "chao buoi sang", "chao buoi toi", "chao buoi trua",
    ]
    
    financial_keywords = [ 
        "gia vang", "ty gia", "chung khoan", "co phieu", "forex", "ngoai hoi",
        "tai chinh", "dau tu", "thi truong", "bat dong san", "quy dau tu",
        "tin tuc tai chinh", "tin tuc chung khoan", "thi truong chung khoan",
    ]
    
    small_talk_match = any(fuzz.partial_ratio(clean_text, kw) >= threshold for kw in small_talk_keywords)
    financial_match = any(fuzz.partial_ratio(clean_text, kw) >= threshold for kw in financial_keywords)
    
    return 1 if small_talk_match and not financial_match else 0

if __name__ == "__main__":
    test_messages = [
        "Hello there!",
        "How are you doing today?",
        "I hate this system",
        "What's up buddy",
        "Can you help me with financial news",
        "You're stupid",
        "Good morning",
        "Tell me about stocks",
    ]
    
    for msg in test_messages:
        classification = classify_message(msg)
        print(f"{msg:.<50} {classification}")


