def capitalise_letter (sentence):
    output = ''
    # sentence[0].upper()
    # sentence[0] = start

    # for i in range(len(sentence)):
    #     if(sentence[i-1] == ' '):
    #         output += sentence[i].upper()
    #     else:
    #         output += sentence[i]
    # print(output)

    # test = sentence.split(' ')
    for element in sentence.split(' '):
        output += ' ' + element.capitalize()
        # print(element.capitalize())
    print(output.lstrip())


capitalise_letter('my name is emmanuel')