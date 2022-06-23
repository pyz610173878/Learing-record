def sum_naturals(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + k, k + 1
        return total
        
sum_naturals(100)



def sum_cubes(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + pow(k, 3), k + 1
        return total
>>> sum_cubes(100)
25502500


def pi_sum(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + 8 / (k * (k + 2)), k + 4
        return total
pi_sum(100)
3.121594652591009



# 进一步抽象化
def <name>(n):
    total, k = 0, 1
    while k <= n:
        total, k = total + <term>(k), <next>(k)
    return total



def summation(n, term, next):
        total, k = 0, 1
        while k <= n:
            total, k = total + term(k), next(k)
        return total


def cube(k):
        return pow(k, 3)  //求立方
    
def successor(k):	// 每次+1
        return k + 1
    
def sum_cubes(n):
        return summation(n, cube, successor)
    
    
def summation(3, term, next):
        total, k = 0, 1
        while k <= n:
            total, k = total + term(k), next(k)
        return total