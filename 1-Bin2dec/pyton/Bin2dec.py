
def bin_to_dec(bin_str):
    dec_val = 0
    bin_length = len(bin_str)

    for i in range(bin_length):
#ikinin üssünü kullanarak ondalık eşdeğer hesaplıyor
        dec_val += int(bin_str[i]) * (2 ** (bin_length - i - 1))

    return dec_val

def main():
    try:
#binary girişini alıyoruz
        bin_input = input("Enter a binary number (max 8 digits) : ")

#girilen şeyin binary olup olmadığına bakıyoruz
        if not all(bit in '01' for bit in bin_input) or len(bin_input) > 8:
            raise ValueError("Invalid input. Please enter a binary number.")

#binary sayıyı decimal sayıya dönüştürüyoruz
        dec_result = bin_to_dec(bin_input)
        print(f"{bin_input} in decimal is = {dec_result}")
    
    except ValueError as e:
        print(f"error : {e}")

if __name__ == "__main__":
    main()    