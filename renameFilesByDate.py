# Python script to rename files, dropbox-style, by the time they were created.

from datetime import datetime
import glob, os, pytz, sys

def renameFilesByDate(pattern, timezone='America/Los_Angeles', commit=False):
	print "  Renaming files matching " + pattern
	print "  Using timezone " + timezone
	if not commit:
		print "  Printing file names for debugging. To actually rename the files, use"
		print "    `renameFiles.py pattern timezone True`"

	targetTz = pytz.timezone(timezone)

	cwd = os.getcwd()
	count = 0
	for path in sorted(glob.iglob(os.path.join(cwd, pattern))):
		count += 1
		_, extension = os.path.splitext(path)
		createdUnixTime = int(os.stat(path).st_birthtime)
		createdDateTime = datetime.fromtimestamp(createdUnixTime, targetTz)
		basePath = os.path.join(cwd, createdDateTime.strftime("%Y-%m-%d %H.%M.%S"))
		newName = basePath + extension;
		dupebuster = 0;
		while os.path.exists(newName):
			dupebuster += 1
			newName = basePath + '-' + str(dupebuster) + extension

		print '  ' + path + ' -> ' + newName
		if commit:
			os.rename(path, newName)

	if commit: 
		print '  Renamed ' + str(count) + ' files'
	else:
		print '  Printed ' + str(count) + ' filenames for debugging'

if __name__ == "__main__":
   renameFilesByDate(*sys.argv[1:])