import sys
import time


# Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return lines


def main():
    # get our data as an array from read_in()
    lines = read_in()
    lines = str(lines)
    if "PLAY" in lines:
        print("PLAYING THIS :")

        sheet = lines
        # PARSING DATA
        merde, sheet, merde2 = sheet.split("'")
        sheet, merde2 = sheet.split("]")
        merde, sheet = sheet.split("[")
        note1, note2, note3, note4, note5, note6, note7, note8 = sheet.split(';')
        speed= lines
        merde, speed, merde2 = speed.split("'")
        merde, speed, merde2 = speed.split("/")
        # END PARSING DATA

        print("note 1=", note1)
        print("note 2=", note2)
        print("note 3=", note3)
        print("note 4=", note4)
        print("note 5=", note5)
        print("note 6=", note6)
        print("note 7=", note7)
        print("note 8=", note8)
        print("SPEED=",speed)

    if "STOP" in lines:
        print("JAI COMPRIS JE MARRETE :")
        print(lines)

    # return the sum to the output stream


# Start process
if __name__ == '__main__':
    main()
