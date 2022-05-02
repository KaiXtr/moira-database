import os

for i in range(1000,1500):
	path = os.path.join(os.getcwd(),str(i))
	print(path)
	os.mkdir(path)