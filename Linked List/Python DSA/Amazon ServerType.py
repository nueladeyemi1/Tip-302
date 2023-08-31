def calculate_inefficiency(server_type):
    inefficiency = 0
    for i in range(1, len(server_type)):
        if server_type[i] != server_type[i - 1]:
            inefficiency += 1
    return inefficiency

def minimize_inefficiency(server_type):
    server_type_list = list(server_type)
    
    for i in range(len(server_type_list)):
        if server_type_list[i] == '?':
            # Calculate inefficiency when replacing with '0'
            server_type_list[i] = '0'
            inefficiency_with_0 = calculate_inefficiency(server_type_list)
            
            # Calculate inefficiency when replacing with '1'
            server_type_list[i] = '1'
            inefficiency_with_1 = calculate_inefficiency(server_type_list)
            
            # Choose the replacement that minimizes inefficiency
            if inefficiency_with_0 <= inefficiency_with_1:
                server_type_list[i] = '0'
            else:
                server_type_list[i] = '1'
    
    final_inefficiency = calculate_inefficiency(server_type_list)
    return final_inefficiency

# Example usage
serverType = "??011??0"
minimum_inefficiency = minimize_inefficiency(serverType)
print("Minimum inefficiency:", minimum_inefficiency)
